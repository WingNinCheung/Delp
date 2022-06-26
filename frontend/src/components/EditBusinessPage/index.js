import { useDispatch, useSelector } from "react-redux";
import { addBusiness } from "../../store/business";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export const EditBusiness = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const thisBusiness = useSelector((state) => state.business[id]);

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

    const payload = {
      ownerId: id,
      title,
      imageUrl,
      description,
      address,
      city,
      state,
      zipCode,
    };

    const createdBusiness = await dispatch(addBusiness(payload));

    console.log(createdBusiness);
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
    <form className="add-business-form" onSubmit={handleSubmit}>
      <h2>Add Your Business!</h2>
      <ul className="errors">
        {validationErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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
          placeholder="Image link of your business"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
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
      <button type="submit" disabled={validationErrors.length > 0}>
        Create new business!
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditBusiness;
