import { history } from "constants/history";
import { Finish } from "patterns/Loader";
import { Loading } from "patterns/Loader";
import Toast from "patterns/Toast";
import React from "react";
import BlogService from "services/blog.service";
import "./DeleteBlogButton.styles.scss";

export const DeleteBlogButton = ({ blogID }) => {
  console.log("blogID: ", blogID);
  const confirmDelete = () => {
    console.log("blogID: ", blogID);

    if (window.confirm("Do you want to delete this blog?") === true) {
      Loading();
      BlogService.deleteBlogService({ id: blogID })
        .then((result) => {
          Toast("success", "Delete Sucess");
          history.push("/blog");
        })
        .catch((err) => {
          Toast("danger", "Delete Fail");
        })
        .finally(() => Finish());
    }
  };
  return (
    <button type="button" className="btn-delete btn btn-danger" onClick={confirmDelete}>
      Delete
    </button>
  );
};

export default DeleteBlogButton;
