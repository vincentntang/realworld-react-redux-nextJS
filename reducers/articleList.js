import {
  ARTICLE_FAVORITED,
  ARTICLE_UNFAVORITED,
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_FAVORITED:
    case ARTICLE_UNFAVORITED:
      return {};
    case SET_PAGE:
      return {};
    case APPLY_TAG_FILTER:
      return {};
    case HOME_PAGE_LOADED:
      return {};
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {};
    case PROFILE_PAGE_LOADED:
    case PROFILE_FAVORITES_PAGE_LOADED:
      return {};
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
