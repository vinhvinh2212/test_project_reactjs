import React from "react";
import "./Blog.styles.scss";

const Blog = ({ image, title, content }) => {
  return (
    <div className="media">
      <img src={image.url} className="mr-3 align-self-center" alt="..." />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{title}</h5>
        <div className="media-content">{content}</div>
      </div>
    </div>
  );
};

export default Blog;
