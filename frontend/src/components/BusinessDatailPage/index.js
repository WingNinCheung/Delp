import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteBusiness } from "../../store/business";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/business";
import Reviews from "../Reviews";
import { Maps } from "../Map";
import "./detail.css";
import "../Map/map.css";

export const BusinessDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const loggedUserId = useSelector((state) => state.session.user?.id);

  const thisBusiness = useSelector((state) => state?.business[id]);
  const isAuthorizedOwner = loggedUserId === thisBusiness?.ownerId;

  useEffect(() => {
    dispatch(getBusinesses());
  }, [loggedUserId, dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    history.push(`/business/${thisBusiness.id}/edit`);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    let res = dispatch(deleteBusiness(id));
    if (res) {
      dispatch(getBusinesses());
    }

    if (res) {
      history.push("/home");
    }
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
            <h1>{thisBusiness.description}</h1>
          </div>
        </div>

        <div className="photo-container">
          <div className="photo">
            <h2 className="photo-session">Photo</h2>
            <img
              className="image"
              src={thisBusiness.imageUrl}
              alt={`${thisBusiness.title}`}
            ></img>
          </div>

          <div className="info-detail">
            <h2 className="info-session">Info</h2>
            <div className="inner">
              <div className="edit-delete">
                {isAuthorizedOwner ? (
                  <button className="edit-button" onClick={handleEdit}>
                    Edit Info
                  </button>
                ) : null}

                {isAuthorizedOwner ? (
                  <button className="deleteButton" onClick={handleDelete}>
                    Delete Business
                  </button>
                ) : null}
              </div>
              <div className="description">
                <h3 className="des">Description</h3>
                {thisBusiness.description}
              </div>
              <div className="address">
                <h3 className="des">Address</h3>
                <i className="fas fa-map-marker-alt" />
                {thisBusiness.address}, {thisBusiness.city},{" "}
                {thisBusiness.state}, {thisBusiness.zipCode}
              </div>
            </div>
          </div>
          <div>
            {thisBusiness.id <= 11 ? (
              <div className="map-container">
                <Maps
                  API_KEYS={process.env.REACT_APP_GOOGLE_KEYS}
                  businessId={id}
                />
              </div>
            ) : (
              <img
                className="bear"
                src="https://media-cdn.tripadvisor.com/media/photo-s/12/19/63/f4/yummy-food-is-great.jpg"
              ></img>
            )}
          </div>
        </div>

        <div className="review">
          <h2 className="recommend">Recommended Reviews</h2>
          <Reviews />
        </div>
      </div>
    );
  }
};
