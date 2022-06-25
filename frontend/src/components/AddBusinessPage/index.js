import { useDispatch, useSelector } from "react-redux";
import { addBusiness } from "../../store/business";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AddBusiness = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // react state
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/home");
  };
  const handleSubmit = (e) => {};

  return (
    <form className="add-business-form" onSubmit={handleSubmit}>
      <h2>Add Your Business!</h2>
      <label>
        Title: {}
        <input
          placeholder="Name of your business"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </label>
      <label>
        Image Url: {}
        <input
          placeholder="Url of your business"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
      </label>
      <label>
        Description: {}
        <input
          placeholder="Business description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </label>
      <label>
        Address: {}
        <input
          placeholder="Street number & name"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </label>
      <label>
        City: {}
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </label>
      <label>
        State: {}
        <input
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
      </label>
      <label>
        Zip Code: {}
        <input
          placeholder="Zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
      </label>
      <button type="submit">Create new business!</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};
