import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editReview } from "../../store/review";

import "./review.css";

const EditReview = ({ reviewId, businessId, setShowModal }) => {
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.review));
  const review = reviews.find((ele) => ele.id == reviewId);

  const [rating, setRating] = useState(review.rating);
  const [reviewBody, setreviewBody] = useState(review.reviewBody);
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  // business id

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: user.id,
      businessId: businessId,
      rating,
      reviewBody,
    };

    const editedReview = dispatch(editReview(payload, reviewId));
    if (editedReview) {
      setShowModal(false);
      window.location.href = `/business/${businessId}`;
    }
  };

  useEffect(() => {
    let errors = [];

    if (reviewBody.length === 0 || reviewBody.length > 250) {
      errors.push("Review cannot be empty or more than 250 words!");
    }

    setValidationErrors(errors);
  }, [reviewBody]);

  return (
    <div className="edit-container">
      <ul className="form-error" id="edit-error">
        {validationErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="create-review" id="edit-form" onSubmit={handleSubmit}>
        <label className="rate-label">Rate the business</label>
        <select
          className="rating-select"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <div className="review-content">
          <textarea
            rows="10"
            cols="100"
            placeholder="How was your experience?"
            id="edit-content"
            value={reviewBody}
            onChange={(e) => setreviewBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button className="review-button" disabled={!reviewBody}>
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
