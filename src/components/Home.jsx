import React from "react";
import weather from "../media/weather.png";
import domus from "../media/domus.png";
import dictionary from "../media/dictionary.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="topPage">
        <h1 className="mb-5">Kateryna Andriichuk</h1>
        <p className="mb-5">Frontend Developer, based in Canada</p>
        <div>
          <Link to="/contact" className="btn btn-branding" title="Contact page">
            Contact me
          </Link>
        </div>
      </div>
      <p className="text-center mt-5 mb-5 projectsWord d-none d-lg-block">
        Projects
      </p>
      <div className="container">
        <div className="row">
          <div className="col d-none d-lg-block">
            <a
              href="https://weather-react-kateryna.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Weather Project"
            >
              <img
                src={weather}
                alt="weather project"
                className="mb-5 img-fluid"
              />
            </a>
          </div>
          <div className="col projectDescription">
            <h2 className="mb-4">Weather Project</h2>
            <p className="mb-5 text-muted">
              The Project is using Weather API in order to get the real-time
              data. Feel free to check the weather near you.
            </p>
            <Link
              to="/projects"
              className="btn btn-branding-outline mb-5"
              title="Weather Project"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col projectDescription">
            <h2 className="mb-4">Domus.land</h2>
            <p className="mb-5 text-muted">
              The website is created with Wix.com. It is used to inform about
              the mobile houses.
            </p>
            <Link to="/projects" className="btn btn-branding-outline mb-5">
              Learn More
            </Link>
          </div>
          <div className="col d-none d-lg-block">
            <a
              href="https://www.domus.land/"
              target="_blank"
              rel="noopener noreferrer"
              title="Mobile Houses Projects"
            >
              <img
                src={domus}
                alt="mobile houses project"
                className="mb-5 img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col d-none d-lg-block">
            <a
              href="https://dictionary-react-kateryna.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Dictionary Project"
            >
              <img
                src={dictionary}
                alt="dictionary project"
                className="mb-5 img-fluid"
              />
            </a>
          </div>
          <div className="col projectDescription">
            <h2 className="mb-4">Dictionary Project</h2>
            <p className="mb-5 text-muted">
              The Project is using Dictionary API and Pexels in order to get the
              rword definitions and images. Please, search for the word.
            </p>
            <Link
              to="/projects"
              className="btn btn-branding-outline mb-5"
              title="Dictionary Project"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
