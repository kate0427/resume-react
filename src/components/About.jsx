import React from "react";
import myPhoto from "../media/myPhoto.jpg";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="about">
      <div className="contentContainer container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <div className="content">
              <h1 className="mb-3 mt-4">Kateryna Andriichuk</h1>
              <h2 className="mb-3">Frontend Developer, based in Ukraine</h2>
              <p className="mb-4">
                I am an active person looking for a position in a software
                development. I have some knowledge of JavaScript, React and
                using APIs. I am also able to create websites using frameworks
                such as Bootstrap. In addition to this, I have great skills in
                management and project coordination gained from the previous
                work experience and participation in the exchange programs.
              </p>
              <a
                href="./projects"
                className="btn btn-branding"
                title="My Project"
              >
                View All Projects
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={myPhoto}
              alt="Kateryna"
              className="img-fluid mt-4 myPhoto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
