import React from "react";
import { Link } from "react-router-dom";
import "./Blog.styles.scss";

const Blog = ({ image, title, content, id }) => {
  return (
    <div className="media">
      <img src={image.url} className="mr-3 align-self-center" alt="..." />
      <div className="media-body">
        <Link to={`/blog/edit/${id}`}>
          <h5 className="mt-0 mb-1">{title}</h5>
        </Link>
        <div className="media-content">{content}</div>
      </div>
    </div>
  );
};

export default Blog;
