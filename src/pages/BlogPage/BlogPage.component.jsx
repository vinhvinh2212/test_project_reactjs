import React from "react";
import { Loading, Finish } from "patterns/Loader";
import { Toast } from "patterns/Toast";
import PaginationCustom from "components/PaginationCustom/PaginationCustom.component";
import BlogService from "services/blog.service";
import "./BlogPage.styles.scss";
import Blog from "components/Blog/Blog.component";
import { Link } from "react-router-dom";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogsData: [],
      pagy: {
        count: 0,
        pages: 0
      },

      searchFilter: {
        page: 1,
        items: 20,
        search: "",
        sort_by: "created_at",
        sort_direction: "desc"
      }
    };
    this.myRef = React.createRef();
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
        this.myRef.current.scrollIntoView({ behavior: "smooth" });
        this.setState({ blogsData: result.data.data, pagy: result.data.pagy });
      })
      .catch((err) => {
        Toast("danger", err.response.data.error);
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
  onKeyUp = (event) => {
    if (event.charCode === 13) {
      this.onPageChange(1);
    }
  };

  render() {
    return (
      <div className="container" ref={this.myRef}>
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
                onKeyPress={this.onKeyUp}
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
              id={item.id}
              image={item.image}
              title={item.title}
              content={item.content}
              created_at={item.created_at}
            ></Blog>
          ))}
        {this.state.pagy.pages !== 1 ? (
          <PaginationCustom
            total={this.state.pagy.count}
            totalPages={this.state.pagy.pages}
            currentAtPage={this.state.searchFilter.page}
            pageLimit={10}
            dataLimit={20}
            onPageChange={this.onPageChange}
          ></PaginationCustom>
        ) : null}
      </div>
    );
  }
}

export default BlogPage;
