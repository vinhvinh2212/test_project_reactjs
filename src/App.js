import React from "react";
import PublicRoute from "./layouts/PublicRoute/PublicRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound.component";
import { history } from "constants/history";

import { BrowserRouter, Switch, Route, Router, Redirect } from "react-router-dom";
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
            <Route path="/blog" component={PublicRoute} />
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
