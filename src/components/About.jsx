import React from "react";
import myPhoto from "../media/myPhoto.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

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
                I am a highly motivated specialist from Ukraine who is moving to
                Canada because of the War. With an experience of working abroad
                in Vietnam, Italy, and the USA, I have developed a strong set of
                interpersonal communication skills. I am a creative
                problem-solver with technical background who supported end users
                creating their own websites in fast-paced, high-pressure
                environments and is able to manage multiple projects
                simultaneously. I am committed to continuing my professional
                development and am always looking for new opportunities to learn
                and grow.
              </p>
              <Link
                to="/projects"
                className="btn btn-branding"
                title="My Project"
              >
                View All Projects
              </Link>
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
