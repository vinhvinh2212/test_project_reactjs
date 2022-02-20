import React from "react";
// import Toast from "patterns/Toast";
import { Loading, Finish } from "patterns/Loader";
import { Toast } from "patterns/Toast";
import { history } from "constants/history";

// import { setUserInfo, setHospital } from "../../redux/user/user.actions";
import BlogService from "services/blog.service";
import { required, imageValidate, checkValidate } from "Utils/validate";
// import { danger } from "redux/alert/alert.actions";

import "./CreateAndEditBlogPage.styles.scss";
import DeleteBlogButton from "components/DeleteBlogButton/DeleteBlogButton.component";

class CreateAndEditBlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusPage: this.props.match.path === "/blog/create" ? "Create" : "Edit",
      blogID: this.props.match.params.blogID || "",
      title: "",
      content: "",
      image: "",
      isValid: false,
      isSubmit: false,
      validation: {},
      imageURL: ""
    };
  }

  componentDidMount = () => {
    const { statusPage, blogID } = this.state;
    if (statusPage === "Edit") {
      this.getBlogDetail(blogID);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value, isSubmit: false });
  };

  handleChangeImage = (event) => {
    const { files, name } = event.target;
    let reader = new FileReader();
    let file = files[0];
    if (file) {
      reader.onloadend = () => {
        this.setState({
          [name]: file,
          imageURL: reader.result,
          isSubmit: false
        });
      };

      reader.readAsDataURL(file);
    } else {
      this.setState({ [name]: "", imageURL: "", isSubmit: false });
    }
  };

  getBlogDetail = (id) => {
    Loading();
    BlogService.getBlogDetailService({ id: id })
      .then((result) => {
        this.setState({
          title: result.data.title,
          content: result.data.content,
          imageURL: result.data.image.url
        });
      })
      .catch((err) => {
        Toast("error", "エラーが発生しました。");
      })
      .finally(() => Finish());
  };

  createBlog = () => {
    if (!this.validation()) return;
    const { title, content, imageURL } = this.state;
    let params = {
      title: title,
      content: content,
      image: imageURL
    };
    Loading();
    BlogService.createBlogService(params)
      .then((result) => {
        Toast("success", "成功");
        history.push("/blog");
      })
      .catch((err) => {
        Toast("error", "エラーが発生しました。");
      })
      .finally(() => Finish());
  };

  updateBlog = () => {
    if (!this.validation()) return;
    const { blogID, title, content, imageURL } = this.state;
    let params = {
      id: blogID,
      title: title,
      content: content,
      image: imageURL
    };
    Loading();
    BlogService.updateBlogService(params)
      .then((result) => {
        console.log("update blog: ", result);
        Toast("success", "成功");
        history.push("/blog");
      })
      .catch((err) => {
        Toast("error", "エラーが発生しました。");
      })
      .finally(() => Finish());
  };

  validation = () => {
    let validation = {
      title: {
        required: required(this.state.title),
        message: "Please enter a title in the input."
      },
      content: {
        required: required(this.state.content),
        message: "Please enter a content in the textarea."
      },
      image: {
        isValidImage: imageValidate(this.state.image),
        message: "Please select a valid image."
      }
    };
    this.setState({ validation: validation });
    return checkValidate(validation);
  };

  render() {
    const {
      title,
      content,
      imageURL,
      isSubmit,
      validation,
      statusPage,
      image,
      blogID
    } = this.state;
    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>{statusPage} Blog</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Blog title</label>
            <input
              type="text"
              className={`form-control ${
                isSubmit && validation.title?.required === false
                  ? "is-invalid"
                  : null
              } ${
                isSubmit && validation.title?.required === true
                  ? "is-valid"
                  : null
              }`}
              value={title}
              name="title"
              onChange={this.handleChange}
              placeholder="Blog title"
            />
            <div className="invalid-feedback">{validation.title?.message}</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Blog content</label>
            <textarea
              className={`form-control ${
                isSubmit && validation.content?.required === false
                  ? "is-invalid"
                  : null
              } ${
                isSubmit && validation.content?.required === true
                  ? "is-valid"
                  : null
              }`}
              rows="3"
              name="content"
              value={content}
              onChange={this.handleChange}
            ></textarea>
            <div className="invalid-feedback">
              {validation.content?.message}
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="exampleFormControlInput1">Blog image</label>
            <div className="custom-file">
              <input
                type="file"
                className={`custom-file-input ${
                  isSubmit && validation.image?.isValidImage === false
                    ? "is-invalid"
                    : null
                } ${
                  isSubmit && validation.image?.isValidImage === true
                    ? "is-valid"
                    : null
                }`}
                accept="image/*"
                name="image"
                onChange={this.handleChangeImage}
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                {image ? image.name : "Choose file..."}
              </label>
              <div className="invalid-feedback">
                {validation.image?.message}
              </div>
            </div>
          </div>
          <div className="form-group">
            {(image || statusPage === "Edit") && (
              <img
                className="img-thumbnail img-thumbnail-custom"
                src={imageURL}
                alt="img"
              />
            )}
          </div>
        </form>
        <div className="form-group">
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ isSubmit: true }, () => {
                if (statusPage === "Edit") {
                  this.updateBlog();
                } else this.createBlog();
              });
            }}
          >
            Save
          </button>
          {statusPage === "Edit" && (
            <DeleteBlogButton blogID={blogID}></DeleteBlogButton>
          )}
        </div>
      </div>
    );
  }
}

export default CreateAndEditBlogPage;
