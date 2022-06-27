import { csrfFetch } from "./csrf";

const LOAD_REVIEW = "review/loadReview";
// const ADD_BUSINESS = "business/ADD_BUSINESS";
// const DELETE_BUSINESS = "business/DELETE_BUSINESS";

// actions
const load = (reviews) => {
  return {
    type: LOAD_REVIEW,
    reviews,
  };
};

// Thunks
export const getReviews = (businessId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${businessId}`);

  if (res.ok) {
    const reviews = await res.json();
    dispatch(load(reviews));
  }
};

// Reducer
const reviewReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_REVIEW:
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
