import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      // Assuming the API returns a token or similar
      localStorage.setItem("token", response.data.token); // Store the token
      navigate("/home");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ backgroundColor: "#FDF6FA" }}>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div
          className="card"
          style={{
            width: "20rem",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="card-body">
            <div className="text-center mb-4">
              <i className="fas fa-crow fa-2x" style={{ color: "#F361AF" }}></i>
              <h1
                className="h4"
                style={{ color: "#3F3038", fontWeight: "bold" }}
              >
                BlogBliss
              </h1>
            </div>
            <h3
              className="fw-normal mb-3 text-center"
              style={{ color: "#F361AF", letterSpacing: "1px" }}
            >
              Login
            </h3>
            <form onSubmit={handleSubmit}>
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
                  className="form-control shadow-none"
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
                  className="form-control shadow-none"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-danger text-center">{error}</p>}
              <button
                className="btn"
                style={{
                  backgroundColor: "#F361AF",
                  color: "#FFFFFF",
                  width: "100%",
                }}
                type="submit"
              >
                Sign In
              </button>
              <p className="mt-3 text-center">
                Don't have an account?{" "}
                <NavLink to="/signup" style={{ color: "#F361AF" }}>
                  Sign Up here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
