import {
  EDITOR_PAGE_LOADED,
  EDITOR_PAGE_UNLOADED,
  ARTICLE_SUBMITTED,
  ASYNC_START,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_FIELD_EDITOR
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case EDITOR_PAGE_LOADED:
      return {};
    case EDITOR_PAGE_UNLOADED:
      return {};
    case ARTICLE_SUBMITTED:
      return {};
    case ASYNC_START:
      if (action.subtype === ARTICLE_SUBMITTED) {
        return {};
      }
      break;
    case ADD_TAG:
      return {};
    case REMOVE_TAG:
      return {};
    case UPDATE_FIELD_EDITOR:
      return {};
    default:
      return state;
  }

  return state;
};
