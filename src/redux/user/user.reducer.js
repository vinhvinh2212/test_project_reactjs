import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  user: "",
  loggedIn: false,
  hospitalCode: ""
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload.user,
        loggedIn: action.payload.loggedIn,
        hospitalCode: action.payload.hospitalCode
      };
    case UserActionTypes.SET_HOSPITAL_CODE:
      return {
        ...state,
        hospitalCode: action.payload
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
