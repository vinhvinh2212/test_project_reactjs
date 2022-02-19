import React from "react";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              ABCDEF.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
              help the upcoming programmers with the code. Scanfcode focuses on
              providing the most efficient code or snippets as the code wants to
              be simple. We will help programmers build up concepts in different
              programming languages that include C, C++, Java, HTML, CSS,
              Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="/blog">C</a>
              </li>
              <li>
                <a href="/blog">UI Design</a>
              </li>
              <li>
                <a href="/blog">PHP</a>
              </li>
              <li>
                <a href="/blog">Java</a>
              </li>
              <li>
                <a href="/blog">Android</a>
              </li>
              <li>
                <a href="/blog">Templates</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/blog">About Us</a>
              </li>
              <li>
                <a href="/blog">Contact Us</a>
              </li>
              <li>
                <a href="/blog">Contribute</a>
              </li>
              <li>
                <a href="/blog">Privacy Policy</a>
              </li>
              <li>
                <a href="/blog">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright © 2017 All Rights Reserved by
              <a href="/blog">ABCDEF</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="/blog">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="/blog">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="dribbble" href="/blog">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="/blog">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
