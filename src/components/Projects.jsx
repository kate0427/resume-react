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
                <img src={weather} className="img-fluid" alt="weather App" />
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="https://weather-react-kateryna.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Weather Project"
              >
                <h3 className="mt-4">Weather Project</h3>
              </a>
              <p className="mt-3 text-muted text-center">
                Built with React
                <a
                  href="https://github.com/kate0427/weather-project-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github icon"></i>
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
                <h3 className="mt-5">Domus.land</h3>
              </a>
              <p className="mt-3 text-muted text-center">
                Built with{" "}
                <a
                  className="text-muted"
                  href="https://www.wix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wix.com
                </a>
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
                  className="img-fluid"
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
                  className="img-fluid"
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
                <h3 className="mt-4">Dictionary Project</h3>
              </a>
              <p className="mt-3 text-muted text-center">
                Built with React
                <a
                  href="https://github.com/kate0427/dictionary-project-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github icon"></i>
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
