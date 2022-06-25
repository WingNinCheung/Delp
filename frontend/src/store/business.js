import { csrfFetch } from "./csrf";

const LOAD_BUSINESS = "business/loadBusiness";
const ADD_BUSINESS = "business/ADD_BUSINESS";

// Action
const load = (businesses) => {
  return {
    type: LOAD_BUSINESS,
    businesses,
  };
};

const addOneBusiness = (business) => {
  return {
    type: ADD_BUSINESS,
    business,
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

export const addBusiness = (business) => async (dispatch) => {
  const res = await fetch("/api/business", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(business),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addOneBusiness(data));
    return data;
  }
};

// Reducer
const businessReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BUSINESS:
      let newState = {};
      action.businesses.forEach((business) => {
        newState[business.id] = business;
      });
      return newState;
    case ADD_BUSINESS:
      newState = { ...state, [action.business.id]: action.business };
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
