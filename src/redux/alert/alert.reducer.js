import { AlertActionTypes } from "./alert.types";

const INITIAL_STATE = {
  type: "",
  name: "",
  message: ""
};
const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AlertActionTypes.ALERT_SUCCESS:
    return {
      type: AlertActionTypes.ALERT_SUCCESS,
      message: action.payload
    };
  case AlertActionTypes.ALERT_WARNING:
    return {
      type: AlertActionTypes.ALERT_WARNING,
      message: action.payload
    };

  case AlertActionTypes.ALERT_DANGER:
    return {
      type: AlertActionTypes.ALERT_DANGER,
      message: action.payload
    };
  case AlertActionTypes.ALERT_CLEAR:
    return {
      ...INITIAL_STATE
    };
  default:
    return state;
  }
};

export default alertReducer;
