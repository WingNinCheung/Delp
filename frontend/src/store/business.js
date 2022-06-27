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

const deleteBusiness = (business) => {
  return;
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
  const res = await csrfFetch("/api/business", {
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

export const updateBusiness = (data, id) => async (dispatch) => {
  const res = await csrfFetch(`/api/business/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const business = await res.json();

    dispatch(addOneBusiness(business));
    return business;
  }
};

// Reducer
const businessReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_BUSINESS:
      action.businesses.forEach((business) => {
        newState[business.id] = business;
      });
      return newState;
    case ADD_BUSINESS:
      if (!state[action.business.id]) {
        newState = { ...state, [action.business.id]: action.business };
        return newState;
      }
      newState = {
        ...state,
        [action.business.id]: {
          ...state[action.business.id],
          ...action.business,
        },
      };
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
