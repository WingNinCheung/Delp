import { getReviews } from "../../store/review";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Reviews = () => {
  // business id
  const { id } = useParams();
  const dispatch = useDispatch();

  const reviews = useSelector((state) => Object.values(state.review));

  // format the date into Mon Jan 1 2022
  reviews.forEach((review) => {
    let date = new Date(review.createdAt);

    review.createdAt = date.toDateString();
  });

  // console.log(reviews);

  // The user name who made that review
  // console.log(reviews[0].User.username);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  return (
    <div className="review-container">
      <div>
        {reviews.map((review) => (
          <>
            <h3 className="username">{review.User.username}</h3>
            <div key={review.createdAt}>{review.createdAt}</div>
            <div key={review.rating}>Rating:{review.rating}</div>
            <div key={review.reviewBody}>{review.reviewBody}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
