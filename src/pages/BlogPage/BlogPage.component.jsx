import React from "react";
// import Toast from "patterns/Toast";
import { Loading, Finish } from "patterns/Loader";
import { Toast } from "patterns/Toast";
import { Pagination } from "components/Pagination/Pagination.component";
import { connect } from "react-redux";

// import { setUserInfo, setHospital } from "../../redux/user/user.actions";
import BlogService from "services/blog.service";
// import { danger } from "redux/alert/alert.actions";

import "./BlogPage.styles.scss";
import Blog from "components/Blog/Blog.component";
import { Link } from "react-router-dom";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogsData: [],
      pagy: {
        count: 0
      },

      searchFilter: {
        page: 1,
        items: 20,
        search: "",
        sort_by: "created_at",
        sort_direction: "desc"
      }
    };
  }

  componentDidMount = () => {
    this.getBlogsData();
  };

  handleChangeFilter = (event) => {
    const { value, name } = event.target;
    this.setState({
      searchFilter: {
        ...this.state.searchFilter,
        [name]: value
      }
    });
  };

  getBlogsData = () => {
    Loading();
    BlogService.getBlogsService(this.state.searchFilter)
      .then((result) => {
        this.setState({ blogsData: result.data.data, pagy: result.data.pagy });
        Toast("success", "成功");
      })
      .catch((err) => {
        Toast("error", "エラーが発生しました。");
      })
      .finally(() => Finish());
  };

  onPageChange = (currentPage) => {
    this.setState(
      { searchFilter: { ...this.state.searchFilter, page: currentPage } },
      () => {
        this.getBlogsData();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="search">
          <div className="form-row">
            <div className="form-group col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search text ..."
                name="search"
                value={this.state.searchFilter.search}
                onChange={this.handleChangeFilter}
              />
            </div>
            <div className="form-group col-md-2">
              <select
                name="sort_by"
                className="form-control"
                onChange={this.handleChangeFilter}
              >
                <option value="created_at">Sort by</option>
                <option value="id">id</option>
                <option value="title">title</option>
                <option value="content">content</option>
                <option value="created_at">created_at</option>
                <option value="updated_at">updated_at</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <select
                name="sort_direction"
                className="form-control"
                onChange={this.handleChangeFilter}
              >
                <option value="desc">Sort direction</option>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <button
                onClick={() => this.onPageChange(1)}
                className="btn btn-primary"
              >
                Search
              </button>
              <Link to="/blog/create">
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "10px" }}
                >
                  Create
                </button>
              </Link>
            </div>
          </div>
        </div>

        {this.state.blogsData &&
          this.state.blogsData.map((item) => (
            <Blog
              key={item.id}
              image={item.image}
              title={item.title}
              content={item.content}
            ></Blog>
          ))}
        {this.state.pagy.pages !== 1 ? (
          <Pagination
            total={this.state.pagy.count}
            pageLimit={10}
            dataLimit={20}
            onPageChange={this.onPageChange}
          ></Pagination>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
