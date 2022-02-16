import React from "react";
import AuthLayoutUser from "./layouts/PrivateRoute/PrivateRoute";

import Login from "./pages/LoginPage/Login.component";
import MainMenu from "./pages/MainMenu/MainMenu.component";
import BlogPage from "./pages/BlogPage/BlogPage.component";
import PageNotFound from "./pages/PageNotFound/PageNotFound.component";

import { history } from "constants/history";

import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { clear } from "./redux/alert/alert.actions";

import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/scss/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App");
    history.listen(() => {
      // clear alert on location change
      this.props.clear();
    });
  }

  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/blog" />;
              }}
            />
            {/* Authentication Pages */}
            <Route path="/login/:hospital" component={Login} />
            {/* Dashboard Pages */}
            <AuthLayoutUser path="/mainmenu" component={MainMenu} />
            <Route path="/blog" component={BlogPage} />

            <Route path="*" component={PageNotFound} />
            <Route path="/404" component={PageNotFound} />
          </Switch>
        </Router>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = ({ userReducer }) => ({
  loggedIn: userReducer.loggedIn
});
const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
