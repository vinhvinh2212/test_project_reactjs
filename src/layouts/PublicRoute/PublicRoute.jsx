import React, { useEffect } from "react";
import "./PublicRoute.scss";

import { Link, Route, Switch } from "react-router-dom";
import BlogPageComponent from "pages/BlogPage/BlogPage.component";
import CreateAndEditBlogPageComponent from "pages/CreateAndEditBlogPage/CreateAndEditBlogPage.component";
import Footer from "components/Footer/Footer.component";
import BlogDetail from "components/BlogDetail/BlogDetail.component";

const PublicRoute = ({ match }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [match]);
  return (
    <div className="blog-page" style={{ minHeight: "100vh" }}>
      <div>
        {/* page-header */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="page-caption">
                  <Link to="/blog">
                    <h1 className="page-title">Blog Information</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.page-header*/}
        {/* news */}
        <div className="card-section">
          <div className="container">
            <div className="card-block bg-white mb30">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  {/* section-title */}
                  <div className="section-title mb-0">
                    <h2>All about Blog. We share our knowledge on blog</h2>
                    <p>
                      Our approach is very simple: we define your problem and
                      give the best solution.
                    </p>
                  </div>
                  {/* /.section-title */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                Created for test
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "0 20px 50px 20px" }}>
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              component={BlogPageComponent}
            ></Route>
            <Route
              exact
              path={`${match.path}/create`}
              component={CreateAndEditBlogPageComponent}
            ></Route>
            <Route
              exact
              path={`${match.path}/edit/:blogID`}
              component={CreateAndEditBlogPageComponent}
            ></Route>
            <Route
              exact
              path={`${match.path}/detail/:blogID`}
              component={BlogDetail}
            ></Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PublicRoute;
