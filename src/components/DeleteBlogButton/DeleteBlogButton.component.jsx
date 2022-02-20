import React, { useEffect, useState } from "react";
import "./DeleteBlogButton.styles.scss";

export const DeleteBlogButton = ({ blogID }) => {
  const confirmDelete = () => {
    let text;
    if (window.confirm("Do you want to delete this blog?") === true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    console.log(text);
  };
  return (
    <button
      type="button"
      className="btn-delete btn btn-danger"
      onClick={confirmDelete}
    >
      Delete
    </button>
  );
};

export default DeleteBlogButton;
