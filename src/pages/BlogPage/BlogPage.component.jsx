import React from "react";
// import Toast from "patterns/Toast";
// import { Loading, Finish } from "patterns/Loader";
import { connect } from "react-redux";

import { setUserInfo, setHospital } from "../../redux/user/user.actions";
import BlogService from "services/blog.service";
import { danger } from "redux/alert/alert.actions";

import "./BlogPage.styles.scss";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getBlogsData = (page, items, search, sort_by, sort_direction) => {
    const params = {
      page,
      items,
      search,
      sort_by,
      sort_direction
    };
    BlogService.getBlogsService(params)
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((err) => {
        console.log("err: ", err.response.data);
      });
  };

  render() {
    return (
      <div className="blog-page" style={{ minHeight: "100vh" }}>
        <div className="container">
          <ul className="list-unstyled">
            <li className="media">
              <img src="..." className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
            <li className="media my-4">
              <img src="..." className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
            <li className="media">
              <img src="..." className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">List-based media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
          </ul>
        </div>

        <button onClick={this.getBlogsData}>Get blogs data</button>
      </div>
    );
  }
}
const mapStateToProps = ({ userReducer, alertReducer }) => ({
  currentUser: userReducer.user,
  alert: alertReducer
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
