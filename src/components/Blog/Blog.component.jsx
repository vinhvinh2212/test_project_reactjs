import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import "./Blog.styles.scss";
import EditImageSvg from "assets/images/pen-to-square-solid.svg";

const Blog = ({ image, title, content, id, created_at }) => {
  return (
    <div className="media">
      <img src={image.url} className="mr-3 align-self-center" alt="..." />
      <div className="media-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/blog/detail/${id}`}>
            <h5 className="title mt-0 mb-1" style={{ color: "#448ADD" }}>
              {title}
            </h5>
          </Link>
          <div className="icon-edit">
            <Link to={`/blog/edit/${id}`} className="blog-more-info">
              <img style={{ width: "20px" }} src={EditImageSvg} alt="" />
            </Link>
          </div>
        </div>

        <p className="mt-0 mb-1" style={{ fontSize: "12px" }}>
          Created at: {moment(created_at).format("DD/MM/YYYY")}
        </p>

        <div className="media-content">{content}</div>
        <Link to={`/blog/detail/${id}`} className="blog-more-info">
          Continue reading ...
        </Link>
      </div>
    </div>
  );
};

export default Blog;
