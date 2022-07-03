import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateBusiness } from "../../store/business";
import { getBusinesses } from "../../store/business";
import { convertToGeoCode } from "../Map";
import "./edit.css";

export const EditBusiness = () => {
  let lat;
  let lng;
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const thisBusiness = useSelector((state) => state?.business[id]);

  const [title, setTitle] = useState(thisBusiness?.title);
  const [imageUrl, setImageUrl] = useState(thisBusiness?.imageUrl);
  const [description, setDescription] = useState(thisBusiness?.description);
  const [address, setAddress] = useState(thisBusiness?.address);
  const [city, setCity] = useState(thisBusiness?.city);
  const [state, setState] = useState(thisBusiness?.state);
  const [zipCode, setZipCode] = useState(`${thisBusiness?.zipCode}`);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/business/${id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await convertToGeoCode(address, city);

    if (data) {
      const { latitude, longitude } = data.data[0];
      lat = latitude;
      lng = longitude;
    }

    const payload = {
      ...thisBusiness,
      ownerId: thisBusiness.ownerId,
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

    const createdBusiness = dispatch(updateBusiness(payload, id));

    if (createdBusiness) {
      history.push(`/business/${id}`);
    }
  };

  useEffect(() => {
    dispatch(getBusinesses());
  }, [dispatch]);

  useEffect(() => {
    const errors = [];
    let regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

    if (!title?.length) {
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
    if (!address?.length || !city?.length || !state.length) {
      errors.push("We'd love to know where it is at");
    }
    if (zipCode?.length !== 5) {
      errors.push("Invalid zip code!");
    }
    setValidationErrors(errors);
  }, [title, imageUrl, address, city, state, zipCode]);

  if (thisBusiness)
    return (
      <div className="add-container">
        <form className="add-business-form" onSubmit={handleSubmit}>
          <h2 className="addBusiness">Edit Your Business!</h2>
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
            className="new-save"
            type="submit"
            disabled={validationErrors.length > 0}
          >
            Save
          </button>
          <button className="edit-cancel" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
};

export default EditBusiness;
