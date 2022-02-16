import { AlertActionTypes } from "./alert.types";

export const success = (message) => {
  return {
    type: AlertActionTypes.ALERT_SUCCESS,
    payload: message
  };
};

export const warning = (message) => {
  return {
    type: AlertActionTypes.ALERT_WARNING,
    payload: message
  };
};

export const danger = (message) => {
  return {
    type: AlertActionTypes.ALERT_DANGER,
    payload: message
  };
};

export const clear = () => {
  return {
    type: AlertActionTypes.ALERT_CLEAR
  };
};
