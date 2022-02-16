import React from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { logoutUserInfo } from "../../redux/user/user.actions";

const MainMenu = ({ logoutUserInfo, hospitalCode }) => {
  const userInfo = useSelector((state) => state.userInfo);

  console.log(userInfo);

  return (
    <div className="mainmenu">
      <h1>MainMenu</h1>
      <div className="p-3 bg-gray"></div>
      <button onClick={() => logoutUserInfo(hospitalCode)}>
        Logout User Info
      </button>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  hospitalCode: userReducer.hospitalCode
});

const mapDispatchToProps = (dispatch) => ({
  logoutUserInfo: (hospitalCode) => dispatch(logoutUserInfo(hospitalCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
