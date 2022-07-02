import { csrfFetch } from "./csrf";

const LOAD_BUSINESS = "business/loadBusiness";
const ADD_BUSINESS = "business/ADD_BUSINESS";
const DELETE_BUSINESS = "business/DELETE_BUSINESS";

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

const deleteOneBusiness = (businessId) => {
  return {
    type: DELETE_BUSINESS,
    businessId,
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

export const deleteBusiness = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/business/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const businessId = await res.json();
    dispatch(deleteOneBusiness(businessId));
    return businessId;
  }
};

export const convertToGeoCode = (address, city) => async (dispatch) => {
  const KEYS = process.env.REACT_APP_POSITIONSTACK_KEYS;

  const res = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=/${KEYS}&query=${address} ${city}`
  );

  if (res.ok) {
    const geoCodes = await res.json();
    return geoCodes;
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
    case DELETE_BUSINESS:
      newState = { ...state };
      delete newState[action.businessId.id];
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
