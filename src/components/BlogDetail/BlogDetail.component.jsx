import moment from "moment";
import { Finish } from "patterns/Loader";
import { Loading } from "patterns/Loader";
import Toast from "patterns/Toast";
import React, { useEffect, useState } from "react";
import BlogService from "services/blog.service";

const BlogDetail = ({ match }) => {
  const [blogID] = useState(match.params.blogID);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlogDetail(blogID);
  }, [blogID]);

  const getBlogDetail = (id) => {
    Loading();
    BlogService.getBlogDetailService({ id: id })
      .then((result) => {
        console.log(result);
        setBlog(result.data);
      })
      .catch((err) => {
        Toast("danger", "エラーが発生しました。");
      })
      .finally(() => Finish());
  };
  return (
    <div className="container blog-main">
      <h3 className="pb-4 mb-4 font-italic border-bottom">
        Blog Detail Information
      </h3>
      <div className="blog-post">
        <h2 className="blog-post-title">{blog?.title}</h2>
        <p className="blog-post-meta">
          {moment(blog?.created_at).format("DD/MM/YYYY")} by Someone
        </p>
        <p>{blog?.content}</p>
        <hr />
        <img
          className="img-thumbnail img-thumbnail-custom rounded mx-auto d-block"
          src={blog?.image.url}
          alt="img"
        />
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <blockquote>
          <p>
            Curabitur blandit tempus porttitor.
            <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
            leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </blockquote>
        <p>
          Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <h2>Heading</h2>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
        <h3>Sub-heading</h3>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </p>
        <pre>
          <code>Example code block</code>
        </pre>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
          malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa.
        </p>
        <h3>Sub-heading</h3>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <ul>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </p>
        <ol>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
          </li>
        </ol>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </p>
      </div>
      {/* /.blog-post */}
      <div className="blog-post">
        <h2 className="blog-post-title">Another blog post</h2>
        <p className="blog-post-meta">December 23, 2013 by Someone</p>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
          quam venenatis vestibulum. Sed posuere consectetur est at lobortis.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
        <blockquote>
          <p>
            Curabitur blandit tempus porttitor.{" "}
            <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
            leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </blockquote>
        <p>
          Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros.
        </p>
      </div>
      {/* /.blog-post */}
      <div className="blog-post">
        <h2 className="blog-post-title">New feature</h2>
        <p className="blog-post-meta">December 14, 2013 by Someone</p>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam
          porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
          cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <ul>
          <li>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </li>
          <li>Donec id elit non mi porta gravida at eget metus.</li>
          <li>Nulla vitae elit libero, a pharetra augue.</li>
        </ul>
        <p>
          Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
          consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
          sed consectetur.
        </p>
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
          libero, a pharetra augue.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
