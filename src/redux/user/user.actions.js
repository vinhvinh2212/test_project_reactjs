import { UserService } from "../../services/user.service";
// import Toast from "patterns/Toast";
import { history } from "constants/history";
import { UserActionTypes } from "./user.types";

import { danger } from "../alert/alert.actions";

export const setUserInfo = (userInfo) => {
  return (dispatch) => {
    UserService.login(userInfo)
      .then((res) => {
        let dataLogin = {
          loggedIn: true,
          user: res.data.user
        };
        dispatch({
          type: UserActionTypes.SET_USER,
          payload: dataLogin
        });
        history.push("/");
      })
      .catch((error) => {
        dispatch(danger(error.response.data.message));
      });
  };
};

export const logoutUserInfo = (hospitalCode) => {
  return (dispatch) => {
    UserService.logout()
      .then(() => {
        dispatch({
          type: UserActionTypes.LOG_OUT_USER
        });
        history.push("/login/" + hospitalCode);
      })
      .catch((error) => {
        dispatch(danger(error.response.data.message));
      });
  };
};
