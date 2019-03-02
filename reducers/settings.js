import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  ASYNC_START
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SETTINGS_SAVED:
      return {};
    case SETTINGS_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      return {};
    default:
      return state;
  }
};
