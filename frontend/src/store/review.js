import { csrfFetch } from "./csrf";

const LOAD_REVIEW = "review/LOAD_REVIEW";
const ADD_REVIEW = "review/ADD_REVIEW";
const DELETE_REVIEW = "business/DELETE_REVIEW";

// actions
const load = (reviews) => {
  return {
    type: LOAD_REVIEW,
    reviews,
  };
};

const addOneReview = (review) => {
  return {
    type: ADD_REVIEW,
    review,
  };
};

const deleteOneReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId,
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

export const getAllReviews = () => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/`);

  if (res.ok) {
    const reviews = await res.json();
    dispatch(load(reviews));
  }
};

export const addReview = (review, businessId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${businessId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addOneReview(data));
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteOneReview(reviewId));
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
    case ADD_REVIEW:
      if (!state[action.review.id]) {
        newState = { ...state, [action.review.id]: action.review };
        return newState;
      }
      newState = {
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review,
        },
      };
      return newState;
    case DELETE_REVIEW:
      newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
