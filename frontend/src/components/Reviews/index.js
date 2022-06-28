import { getReviews } from "../../store/review";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CreateReview from "./createReviewForm";
import { deleteReview } from "../../store/review";

const Reviews = () => {
  // business id
  const { id } = useParams();
  const dispatch = useDispatch();

  const reviews = useSelector((state) => Object.values(state.review));
  const loggedUserId = useSelector((state) => state.session.user?.id);

  // format the date into Mon Jan 1 2022
  reviews.forEach((review) => {
    let date = new Date(review.createdAt);

    review.createdAt = date.toDateString();
  });

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteReview(id));
  };

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  return (
    <div className="review-container">
      <div>
        {reviews.map((review) => (
          <div className="review">
            <h3>{review.User?.username}</h3>
            <div key={review.createdAt}>{review?.createdAt}</div>
            <div key={review.rating}>Rating:{review?.rating}</div>
            <div key={review.reviewBody}>{review?.reviewBody}</div>
            {loggedUserId === review.userId ? (
              // <button
              //   className="delete-review-button"
              //   value={review.id}
              //   onClick={(e) => {
              //     setReviewId(e.target.value);
              //     handleDelete();
              //   }}
              <button
                className="delete-review-button"
                // value={review.id}
                onClick={() => handleDelete(review.id)}
              >
                Delete
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <div className="create-review-container">
        <h3>Write a review!</h3>
        <CreateReview />
      </div>
    </div>
  );
};

export default Reviews;
