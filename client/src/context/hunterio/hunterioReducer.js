import { SET_LOADING, GET_DOMAIN, CLEAR_DOMAINS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_DOMAIN:
      return {
        ...state,
        domain: action.payload,
        loading: false,
      };
    case CLEAR_DOMAINS:
      return {
        ...state,
        domains: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
