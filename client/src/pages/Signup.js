import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#FDF6FA" }}>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div
          className="card shadow"
          style={{ width: "20rem", borderRadius: "10px" }}
        >
          <div className="card-body">
            <div className="text-center mb-4">
              <i className="fas fa-crow fa-2x" style={{ color: "#F361AF" }}></i>
              <h1
                className="h4"
                style={{
                  color: "#3F3038",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                BlogBliss
              </h1>
            </div>

            <h3
              className="fw-normal mb-3 text-center"
              style={{ color: "#F361AF", letterSpacing: "1px" }}
            >
              Sign Up
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ color: "#3F3038" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  style={{ boxShadow: "none" }} // Remove shadow
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ color: "#3F3038" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  style={{ boxShadow: "none" }} // Remove shadow
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ color: "#3F3038" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  style={{ boxShadow: "none" }} // Remove shadow
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="pt-1 mb-4">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#F361AF",
                    color: "#FFFFFF",
                    width: "100%",
                  }}
                  type="submit"
                >
                  Sign Up
                </button>
              </div>

              <p className="text-center">
                Already have an account?{" "}
                <NavLink to="/login" style={{ color: "#F361AF" }}>
                  Sign In here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
