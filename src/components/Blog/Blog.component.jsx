import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import "./Blog.styles.scss";

const Blog = ({ image, title, content, id, created_at }) => {
  return (
    <div className="media">
      <img src={image.url} className="mr-3 align-self-center" alt="..." />
      <div className="media-body">
        <Link to={`/blog/edit/${id}`}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 className="mt-0 mb-1" style={{ color: "#448ADD" }}>
              {title} <i class="bi-alarm"></i>
            </h5>
            <div className="icon-edit">
              <i className="fa-solid fa-pen-to-square">Edit</i>
            </div>
          </div>
        </Link>
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
