import React from "react";
import image from "../assets/logo.png";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={image}
            alt="Samachar Times"
            onClick={() => setCategory("general")}
            className="me-2"
            style={{ height: "65px", width: "auto" }}
          />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: "transparent" }}
          ></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              "business",
              "entertainment",
              "health",
              "science",
              "sports",
              "technology",
            ].map((category) => (
              <li className="nav-item" key={category}>
                <div
                  className="nav-link text-light fw-bold px-1"
                  onClick={() => setCategory(category)}
                  style={{
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
