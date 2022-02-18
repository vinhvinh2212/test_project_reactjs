import { UserActionTypes } from "./blog.types";

const INITIAL_STATE = {
  blogsList: [],
  pagy: {}
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_BLOG_LIST:
      return {
        ...state,
        blogsList: action.payload.data,
        pagy: action.payload.pagy
      };

    case UserActionTypes.LOG_OUT_USER:
      return {
        ...INITIAL_STATE
      };

    default:
      return state;
  }
};

export default userReducer;
