import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="contact-box d-flex justify-content-between m-5 d-none d-md-flex">
          <div>
            <h3>Work Inquiry</h3>
            <p className="text-muted">Let's work together</p>
          </div>
          <div className="contact-button">
            <a
              href="./contact"
              className="btn btn-branding mt-2"
              title="Contact page"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="social-icons d-flex justify-content-center">
          <a
            href="mailto:kate042798@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <i className="fa-regular fa-envelope icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kateryna-a-442352204/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin icon"></i>
          </a>
          <a
            href="https://github.com/kate0427"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fa-brands fa-github icon"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
