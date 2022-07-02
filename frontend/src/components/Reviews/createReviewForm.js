import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { addReview, getReviews } from "../../store/review";
import "./review.css";

const CreateReview = () => {
  const [rating, setRating] = useState(1);
  const [reviewBody, setreviewBody] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  // business id
  const { id } = useParams();

  const user = useSelector((state) => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: user.id,
      businessId: id,
      rating,
      reviewBody,
    };

    const createdReview = dispatch(addReview(payload, id));
    dispatch(getReviews(id));

    if (createdReview) {
      setreviewBody("");
      setRating(1);
      history.push(`/business/${id}`);
    }
  };

  useEffect(() => {
    let errors = [];

    if (reviewBody.length === 0 || reviewBody.length > 250) {
      errors.push("Review cannot be empty or more than 250 words!");
    }

    setValidationErrors(errors);
  }, [reviewBody]);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id, reviewBody]);

  return (
    <>
      <ul className="form-error">
        {validationErrors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="create-review" onSubmit={handleSubmit}>
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
    </>
  );
};

export default CreateReview;
