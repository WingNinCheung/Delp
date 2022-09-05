import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBusinesses } from "../../store/business";
import { getAllReviews } from "../../store/review";
import { NavLink, useParams } from "react-router-dom";
import "../HomePage/home.css";

function SearchName() {
  const dispatch = useDispatch();
  const allBusinesses = useSelector((state) => Object.values(state.business));
  const allReview = useSelector((state) => Object.values(state.review));

  const { text } = useParams();

  const searchBusinesses = allBusinesses.filter((business) => {
    return business.title.toLowerCase().includes(text.toLowerCase());
  });

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
    dispatch(getBusinesses());
    dispatch(getAllReviews());
  }, [dispatch]);

  return (
    <div>
      <h4 className="search-result">Search results for "{text}"...</h4>
      <div className="business-list" id="search-list">
        {searchBusinesses.map((business) => (
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
        {!searchBusinesses.length && (
          <div>
            <h3 className="search-title">
              Sorry. No products found matching your search "{text}"...
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchName;
