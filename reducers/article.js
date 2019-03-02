import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  ADD_COMMENT,
  DELETE_COMMENT
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return state;
    case ARTICLE_PAGE_UNLOADED:
      return state;
    case ADD_COMMENT:
      return state;
    case DELETE_COMMENT:
    default:
      return state;
  }
};
