import React from "react";
import weather from "../media/weather.png";
import domus from "../media/domus.png";
import dictionary from "../media/dictionary.png";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="about">
      <div className="contentContainer container">
        <div className="content text-center">
          <h1 className="mb-5">Take a look at what I've been working on!</h1>
          <div className="row">
            <div className="col-md-6">
              <a
                href="https://weather-react-kateryna.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Weather Project"
              >
                <img
                  src={weather}
                  className="img-fluid d-none d-md-block"
                  alt="weather App"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="https://weather-react-kateryna.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Weather Project"
              >
                <h3 className="mt-3">Weather Project</h3>
              </a>
              <p className="text-muted text-justify">
                The Project is built with React and is using Weather API in
                order to get the real-time data. Feel free to check the weather
                near you.{"  "}
                <a
                  href="https://github.com/kate0427/weather-project-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github icon d-inline"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a
                href="https://www.domus.land/"
                target="_blank"
                rel="noopener noreferrer"
                title="Mobile Houses Projects"
              >
                <h3 className="projectHeader">Domus.land</h3>
              </a>
              <p className=" text-muted text-justify">
                The website is created with{" "}
                <a
                  className="text-muted"
                  href="https://www.wix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wix.com
                </a>
                . It is used to inform about the modular homes for refugees in
                Ukraine.
              </p>
            </div>
            <div className="col-md-6">
              <a
                href="https://www.domus.land/"
                target="_blank"
                rel="noopener noreferrer"
                title="Mobile Houses Projects"
              >
                <img
                  src={domus}
                  className="img-fluid d-none d-md-block"
                  alt="mobile houses app"
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a
                href="https://dictionary-react-kateryna.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Dictionary Project"
              >
                <img
                  src={dictionary}
                  className="img-fluid d-none d-md-block"
                  alt="dictionary App"
                />
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="https://dictionary-react-kateryna.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Dictionary Project"
              >
                <h3 className="projectHeader">Dictionary Project</h3>
              </a>
              <p className=" text-muted text-justify">
                The Project is built with React and is using Dictionary API in
                order to get the word definitions and images. Please, search for
                the word. {"  "}
                <a
                  href="https://github.com/kate0427/dictionary-project-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github icon d-inline"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
