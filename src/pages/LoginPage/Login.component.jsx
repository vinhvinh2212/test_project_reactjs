import React from "react";
// import Toast from "patterns/Toast";
// import { Loading, Finish } from "patterns/Loader";
import { connect } from "react-redux";

import { setUserInfo } from "../../redux/user/user.actions";
import { danger } from "redux/alert/alert.actions";

import "./Login.styles.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      remember: false
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { value, name } = event.target;
    value === "false" ? this.setState({ [name]: true }) : this.setState({ [name]: false });
  };

  isValidatorBlank = (username, password) => {
    let flag = false;

    if (!username) {
      this.props.danger("Please input your username!");
      return flag;
    }
    if (!password) {
      this.props.danger("Please input your password!");
      return flag;
    }
    flag = true;
    return flag;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (this.isValidatorBlank(username, password)) {
      let user = {
        username: username,
        remember: false,
        password: password
      };
      this.props.setUserInfo(user);
    }
  };

  render() {
    return (
      <div className="login-page" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div id="first">
                <div className="myform form ">
                  <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                      <h1>Login</h1>
                    </div>
                  </div>
                  <form method="post" name="login">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="username"
                        name="username"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        autoComplete="on"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter Password"
                        autoComplete="on"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="remember"
                        value={this.state.remember}
                        onChange={this.handleCheckboxChange}
                        checked={this.state.remember}
                      />
                      <label className="form-check-label">Remember me</label>
                    </div>

                    {this.props.alert.message ? (
                      <div className={`alert ${this.props.alert.type}`} role="alert">
                        {this.props.alert.message}
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="col-md-12 text-center ">
                      <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" onClick={this.handleSubmit}>
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ userReducer, alertReducer }) => ({
  currentUser: userReducer.user,
  alert: alertReducer
});
const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (user) => dispatch(setUserInfo(user)),
  danger: (message) => dispatch(danger(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
