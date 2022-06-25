import { csrfFetch } from "./csrf";

const LOAD_BUSINESS = "business/loadBusiness";

// Action
const load = (businesses) => {
  return {
    type: LOAD_BUSINESS,
    businesses,
  };
};

// Thunk
export const getBusinesses = () => async (dispatch) => {
  const res = await csrfFetch("/api/business");

  if (res.ok) {
    const businesses = await res.json();
    dispatch(load(businesses));
  }
};

// Reducer
const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BUSINESS:
      const newState = {};
      action.businesses.forEach((business) => {
        newState[business.id] = business;
      });
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
