import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="topPage">
        <h1 className="mb-5">Kateryna Andriichuk</h1>
        <p className="mb-5">Frontend Developer, based in Canada</p>
        <div>
          <Link
            to="/projects"
            className="btn btn-branding"
            title="Contact page"
          >
            My projects
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
