import { csrfFetch } from "./csrf";

const LOAD_REVIEW = "review/LOAD_REVIEW";
const ADD_REVIEW = "review/ADD_REVIEW";
// const DELETE_BUSINESS = "business/DELETE_BUSINESS";

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

// Thunks
export const getReviews = (businessId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${businessId}`);

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
        console.log("I'm in here");
        console.log("action here", action.review);
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
    default:
      return state;
  }
};

export default reviewReducer;
