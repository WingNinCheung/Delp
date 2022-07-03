import { useDispatch, useSelector } from "react-redux";
import { addBusiness } from "../../store/business";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { convertToGeoCode } from "../Map";
import "./addForm.css";

export const AddBusiness = ({ KEY }) => {
  let lat;
  let lng;
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session);
  const id = user?.user?.id;

  // react state
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // convert address to Geocodes
    const data = await convertToGeoCode(address, city);

    if (data) {
      const { latitude, longitude } = data.data[0];
      lat = latitude;
      lng = longitude;
    }

    const payload = {
      ownerId: id,
      title,
      imageUrl,
      description,
      address,
      city,
      state,
      zipCode,
      lat,
      lng,
    };

    // dispatch convertToGeoCode
    // get the result and check
    // if good, pack it to the payload object and dispatch addBusiness

    const createdBusiness = await dispatch(addBusiness(payload));

    if (createdBusiness) {
      history.push(`/business/${createdBusiness.id}`);
    }
  };

  useEffect(() => {
    const errors = [];
    let regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

    if (!title.length) {
      errors.push("Title cannot be empty!");
    }
    if (!regex.test(imageUrl)) {
      errors.push("Image url must start with http and end in jpg, gif or png");
      errors.push(
        "If you do not have an image at the moment, use the below url:"
      );
      errors.push(
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/healthyfoodsnoteveryday-main-1508848485.jpg"
      );
    }
    if (!address.length || !city.length || !state.length) {
      errors.push("We'd love to know where it is at");
    }
    if (zipCode.length !== 5) {
      errors.push("Invalid zip code!");
    }
    setValidationErrors(errors);
  }, [title, imageUrl, address, city, state, zipCode]);

  return (
    <div className="add-container">
      <form className="add-business-form" onSubmit={handleSubmit}>
        <h2 className="addBusiness">Add Your Business!</h2>
        <ul className="errors">
          {validationErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label className="atitle">
          Title: {}
          <input
            className="ainput"
            placeholder="Name of your business"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
        <label className="atitle">
          Image Url: {}
          <input
            className="ainput"
            placeholder="Image link of your business"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          ></input>
        </label>
        <label className="atitle">
          Description: {}
          <input
            className="ainput"
            placeholder="Business description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </label>
        <label className="atitle">
          Address: {}
          <input
            className="ainput"
            placeholder="Street number & name"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </label>
        <label className="atitle">
          City: {}
          <input
            className="ainput"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </label>
        <label className="atitle">
          State: {}
          <input
            className="ainput"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></input>
        </label>
        <label className="atitle">
          Zip Code: {}
          <input
            className="ainput"
            placeholder="Zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          ></input>
        </label>
        <button
          className="new-create"
          type="submit"
          disabled={validationErrors.length > 0}
        >
          Add business
        </button>
        <button className="new-cancel" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};
