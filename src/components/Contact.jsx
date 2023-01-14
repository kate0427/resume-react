import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contentContainer container">
        <div className="content">
          <h1 className="mb-5 text-center">Let's get in touch!</h1>
          <div className="container contact-page">
            <div className="row">
              <div className="col-lg-4 text-center">
                <h3 className="mb-3">
                  Email
                  <a
                    href="mailto:kate042798@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                  >
                    <i className="fa-regular fa-envelope icon-contact"></i>
                  </a>
                </h3>
                <p className="text-center">
                  <a
                    href="mailto:kate042798@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                  >
                    kate042798@gmail.com
                  </a>
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <h3 className="mb-3">
                  LinkedIn
                  <a
                    href="https://www.linkedin.com/in/kateryna-a-442352204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin icon-contact"></i>
                  </a>
                </h3>
                <p className="text-center">
                  <a
                    href="https://www.linkedin.com/in/kateryna-a-442352204/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    Kateryna Andriichuk
                  </a>
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <h3 className="mb-3">
                  GitHub
                  <a
                    href="https://github.com/kate0427"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <i className="fa-brands fa-github icon-contact"></i>
                  </a>
                </h3>
                <p className="text-center">
                  <a
                    href="https://github.com/kate0427"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    kate0427
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
