import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="container">
    <section
      className="py-3 p-5 py-md-5 py-xl-8"
      style={{ backgroundColor: "#FDF6FA" }}
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2
              className="mb-4 display-5 text-center"
              style={{ color: "#F361AF" }}
            >
              About BlogBliss
            </h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              At BlogBliss, we are committed to fostering creativity and
              collaboration through quality blogging. Our team of passionate
              writers brings innovative ideas to life.
            </p>
            <hr
              className="w-50 mx-auto mb-5 mb-xl-9"
              style={{ borderColor: "#F361AF" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="https://img.freepik.com/free-photo/abstract-aerial-view-artistic-colorful-background_23-2148588806.jpg?w=826" // Updated image to be more abstract and thematic
              alt="About BlogBliss" // Updated alt text
              style={{ border: "5px solid #F361AF" }} // Added border to match theme
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="lead mb-4 text-danger">
              We aim to make a positive impact in the blogging community by
              encouraging diverse voices and perspectives. Our initiatives focus
              on environmental sustainability, social welfare, and educational
              advancement.
            </p>
            <div className="row gy-4 mb-4">
              <div className="col-12 col-md-6">
                <div
                  className="card border-danger"
                  style={{ backgroundColor: "#FDAED8" }}
                >
                  <div className="card-body text-center">
                    <h3 className="display-5 fw-bold text-danger mb-2">37+</h3>
                    <p className="fw-bold m-0">Active Bloggers</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="card border-danger"
                  style={{ backgroundColor: "#FDAED8" }}
                >
                  <div className="card-body text-center">
                    <h3 className="display-5 fw-bold text-danger mb-2">180+</h3>
                    <p className="fw-bold m-0">Quality Blogs</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/home"
              className="btn"
              style={{ backgroundColor: "#F361AF", color: "#FFFFFF" }}
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
