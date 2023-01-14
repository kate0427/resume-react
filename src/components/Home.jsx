import React from "react";
import weather from "../media/weather.png";
import domus from "../media/domus.png";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="home">
      <div className="topPage">
        <h1 className="mb-5">Kateryna Andriichuk</h1>
        <p className="mb-5">Frontend Developer, based in Ukraine</p>
        <div>
          <a href="/contact" className="btn btn-branding" title="Contact page">
            Contact me
          </a>
        </div>
      </div>
      <p className="text-center mt-5 mb-5 projectsWord d-none d-lg-block">
        Projects
      </p>
      <div className="container">
        <div className="row">
          <div className="col d-none d-lg-block">
            <img
              src={weather}
              alt="weather project"
              className="mb-5 img-fluid"
            />
          </div>
          <div className="col projectDescription">
            <h2 className="mb-4">Weather Project</h2>
            <p className="mb-5 text-muted">
              The Project is using Weather API in order to get the real-time
              data. Feel free to check the weather near you.
            </p>
            <a
              href="./projects"
              className="btn btn-branding-outline mb-5"
              title="Weather Project"
            >
              Learn More
            </a>
          </div>
          <div className="row">
            <div className="col projectDescription">
              <h2 className="mb-4">Domus.land</h2>
              <p className="mb-5 text-muted">
                The website is created with Wix.com. It is used to inform about
                the mobile houses.
              </p>
              <a href="./projects" className="btn btn-branding-outline mb-5">
                Learn More
              </a>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={domus}
                alt="mobile houses project"
                className="mb-5 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
