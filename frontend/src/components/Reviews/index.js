import { getReviews } from "../../store/review";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CreateReview from "./createReviewForm";
import { deleteReview } from "../../store/review";
import "./review.css";

const Reviews = () => {
  // business id
  const { id } = useParams();
  const dispatch = useDispatch();

  const reviews = useSelector((state) => Object.values(state.review));
  const loggedUserId = useSelector((state) => state.session.user?.id);

  // console.log(Array.isArray(reviews));

  // format the date into Mon Jan 1 2022
  reviews.forEach((review) => {
    let date = new Date(review.createdAt);

    review.createdAt = date.toDateString();
  });

  const handleDelete = (id) => {
    dispatch(deleteReview(id));
  };

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  return (
    <div className="review-container">
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <div className="user-name">
              <i className="fas fa-user-alt fa-1x" />
              <h3 className="name">{review.User?.username}</h3>
            </div>
            <div className="stardate">
              {review.rating === 1 ? (
                <i className="fas fa-star" />
              ) : review.rating === 2 ? (
                <div>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              ) : review.rating === 3 ? (
                <div>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              ) : review.rating === 4 ? (
                <div>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              ) : (
                <div>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              )}
            </div>
            <div className="date" key={review.createdAt}>
              {review?.createdAt}
            </div>
            <div className="reviewbody" key={review.reviewBody}>
              {review?.reviewBody}
            </div>
            {loggedUserId === review.userId ? (
              <button
                className="delete-review-button"
                onClick={() => handleDelete(review.id)}
              >
                Delete
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <div className="create-review-container">
        <h2 className="review-div">Write a review!</h2>
        <CreateReview />
      </div>
    </div>
  );
};

export default Reviews;
