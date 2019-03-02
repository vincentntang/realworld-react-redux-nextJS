import {
  LOGIN,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {};
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return {};
      }
      break;
    case UPDATE_FIELD_AUTH:
      return {};
    default:
      return state;
  }

  return state;
};
