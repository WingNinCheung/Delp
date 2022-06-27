// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CreateReview = () => {
  const [rating, setRating] = useState(1);
  const [reviewContent, setreviewContent] = useState("");
  return (
    <form className="create-review">
      <label>Select your rating</label>
      <select
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
          value={reviewContent}
          onChange={(e) => setreviewContent(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button className="review-button" disabled={!reviewContent}>
          Post Review
        </button>
      </div>
    </form>
  );
};

export default CreateReview;
