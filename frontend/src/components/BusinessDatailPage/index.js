import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteBusiness } from "../../store/business";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/business";
import Reviews from "../Reviews";
import "./detail.css";

export const BusinessDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const loggedUserId = useSelector((state) => state.session.user?.id);

  const thisBusiness = useSelector((state) => state.business[id]);

  useEffect(() => {
    dispatch(getBusinesses());
  }, [loggedUserId, dispatch]);

  const isAuthorizedOwner = loggedUserId === thisBusiness?.ownerId;

  const handleEdit = (e) => {
    history.push(`/business/${thisBusiness.id}/edit`);
  };

  const handleDelete = (e) => {
    dispatch(deleteBusiness(id));
    window.location.href = "/home";
  };

  if (loggedUserId && thisBusiness) {
    return (
      <div className="detail-container">
        <div
          className="banner-session"
          style={{
            backgroundImage: `url(https://t4.ftcdn.net/jpg/02/89/80/03/360_F_289800335_l89vweOGANYIhKuVHRgpGh5QRwKQMsQx.jpg)`,
            height: "50%",
            width: "100%",
            backgroundSize: "",
          }}
        >
          <div className="spec-title">
            <h1>{thisBusiness.title}</h1>
          </div>
          <div className="spec-des">
            <h1>{thisBusiness.description}, Jananese</h1>
          </div>
        </div>
        <div className="detail-container">
          <div className="photo">
            <h2>Photo</h2>
            <img
              src={thisBusiness.imageUrl}
              alt={`${thisBusiness.title}`}
            ></img>
          </div>
          <div className="info-detail">
            <h2>Info</h2>
            <div className="edit-button">
              {isAuthorizedOwner ? (
                <button onClick={handleEdit}>Edit Info</button>
              ) : null}
            </div>
            <div className="delete-button">
              {isAuthorizedOwner ? (
                <button onClick={handleDelete}>Delete Business</button>
              ) : null}
            </div>
            <div className="description">
              <h3>Description</h3>
              {thisBusiness.description}
            </div>
            <div className="address">
              <h3>Address</h3>
              {thisBusiness.address},{thisBusiness.city},{thisBusiness.state},
              {thisBusiness.zipCode}
            </div>
          </div>
          <div className="review">
            <h2>Reviews</h2>
            <Reviews />
          </div>
        </div>
      </div>
    );
  }
};
