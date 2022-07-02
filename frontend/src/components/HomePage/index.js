import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { getBusinesses } from "../../store/business";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAllReviews } from "../../store/review";

export const Home = () => {
  const dispatch = useDispatch();
  const allBusinesses = useSelector((state) => Object.values(state?.business));
  const allReview = useSelector((state) => Object.values(state.review));

  const findOneReview = (id) => {
    let arr = [];
    allReview.forEach((review) => {
      if (review.businessId === id) {
        arr.push(review.reviewBody);
      }
    });
    return arr[0];
  };

  useEffect(() => {
    let time = setTimeout(() => {
      dispatch(getBusinesses());
    }, 300);

    dispatch(getAllReviews());

    return () => clearTimeout(time);
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
                  <i className="far fa-comment" />
                  {findOneReview(business.id) !== undefined ? (
                    `"${findOneReview(business.id)}"`
                  ) : (
                    <span>No reviews yet</span>
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
