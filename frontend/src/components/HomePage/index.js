import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllReviews } from "../../store/review";

export const Home = () => {
  const dispatch = useDispatch();
  const allBusinesses = useSelector((state) => Object.values(state.business));
  const loadOneReview = true;
  const allReview = useSelector((state) => Object.values(state.review));
  // console.log(allReview[0].businessId);

  useEffect(() => {
    dispatch(getBusinesses());
    dispatch(getAllReviews());
  }, [dispatch]);

  return (
    <>
      <div className="intro">
        {" "}
        Best Restaurants in San Francisco Bay Area, CA
      </div>
      <div className="business-list">
        {allBusinesses.map((business) => (
          <NavLink
            className="nav-area"
            key={`${business.id}`}
            to={`/business/${business.id}`}
          >
            <div className="business-card">
              <img
                className="food-img"
                height="300px"
                src={business.imageUrl}
                alt={`business.title`}
              ></img>
              <div className="word-session">
                <div className="bus-title">
                  <div className="b">{business.title}</div>
                </div>
                <div className="bus-des">
                  <div className="b">{business.description}</div>
                </div>
                <div className="bus-address">
                  <i className="fas fa-location-arrow" />
                  {business.address}, {business.city}, {business.state},{" "}
                  {business.zipCode}
                </div>
                <div className="review-home">
                  {allReview.map((review) =>
                    review.businessId === business.id && loadOneReview ? (
                      <div>"{review.reviewBody}"</div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
