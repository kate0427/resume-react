import React from "react";
import weather from "../media/weather.png";
import domus from "../media/domus.png";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div className="about">
      <div className="contentContainer container">
        <div className="content text-center">
          <h1 className="mb-5">Take a look at what I've been working on!</h1>
          <div className="row">
            <div className="col-md-6">
              <img src={weather} className="img-fluid" alt="weather App" />
            </div>
            <div className="col-md-6">
              <a
                href="https://weather-react-kate.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                title="Weather Project"
              >
                <h3 className="mt-4">Weather Project</h3>
              </a>
              <p className="mt-3 text-muted text-center">Built with React</p>
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
              <img src={domus} className="img-fluid" alt="mobile houses app" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
