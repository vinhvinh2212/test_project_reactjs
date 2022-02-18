import axios from "configs/axios";

// const API_CREATE_BLOG = "/api/v1/blogs"; //post
// const API_GET_BLOGS = "/api/v1/blogs"; //get
// const APT_GET_BLOG_DETAIL_BY_ID = "/api/v1/blogs/"; //get
// const API_UPDATE_BLOG_BY_ID = "/api/v1/blogs"; //put
// const API_DELETE_BLOG = "/api/v1/blogs"; //delete

const API_LIST = {
  API_CREATE_BLOG: "/api/v1/blogs",
  API_GET_BLOGS: "/api/v1/blogs",
  APT_GET_BLOG_DETAIL_BY_ID: "/api/v1/blogs/",
  API_UPDATE_BLOG_BY_ID: "/api/v1/blogs",
  API_DELETE_BLOG: "/api/v1/blogs"
};

const BlogService = {
  getBlogsService(params) {
    return axios.get(API_LIST.API_GET_BLOGS, { params });
  }
};

export default BlogService;