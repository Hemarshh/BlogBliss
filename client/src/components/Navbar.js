import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg"
    style={{
      backgroundColor: "#F361AF",
      padding: "10px 20px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="container-fluid">
      <Link
        className="navbar-brand"
        to="/"
        style={{ color: "#FDF6FA", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        BlogBliss
      </Link>
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
          style={{ backgroundColor: "#FDF6FA" }}
        ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link
              className="nav-link"
              to="/"
              style={{ color: "#FDF6FA", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#FDAED8")} // Hover effect
              onMouseLeave={(e) => (e.target.style.color = "#FDF6FA")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link
              className="nav-link"
              to="/new"
              style={{ color: "#FDF6FA", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#FDAED8")}
              onMouseLeave={(e) => (e.target.style.color = "#FDF6FA")}
            >
              New Blog
            </Link>
          </li>
          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link
              className="nav-link"
              to="/about"
              style={{ color: "#FDF6FA", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#FDAED8")}
              onMouseLeave={(e) => (e.target.style.color = "#FDF6FA")}
            >
              About
            </Link>
          </li>
          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link
              className="nav-link"
              to="/login"
              style={{ color: "#FDF6FA", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#FDAED8")}
              onMouseLeave={(e) => (e.target.style.color = "#FDF6FA")}
            >
              Login
            </Link>
          </li>
          <li className="nav-item" style={{ margin: "0 15px" }}>
            <Link
              className="nav-link"
              to="/signup"
              style={{ color: "#FDF6FA", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "#FDAED8")}
              onMouseLeave={(e) => (e.target.style.color = "#FDF6FA")}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
