import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        // Return the current state
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        // Return all contacts where id not equal to the targeted deleted contact
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        // Return the entire current object
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        // Set the current back to null
        current: null,
      };
    default:
      return state;
  }
};
