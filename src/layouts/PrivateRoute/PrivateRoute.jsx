import React from "react";
import { connect } from "react-redux";
import "./PrivateRoute.scss";

import { Redirect, Route } from "react-router-dom";

const AuthLayoutUser = ({
  component: Component,
  loggedIn,
  hospitalCode,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login/" + hospitalCode,
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);

const mapStateToProps = ({ userReducer }) => ({
  loggedIn: userReducer.loggedIn,
  hospitalCode: userReducer.hospitalCode
});
export default connect(mapStateToProps, null)(AuthLayoutUser);
