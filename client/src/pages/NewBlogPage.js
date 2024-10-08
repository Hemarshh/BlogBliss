import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBlogPage = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", blog);
      navigate("/home"); // Redirect to home or another page after creating a blog
    } catch (error) {
      console.error("Error creating the blog:", error);
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#FDF6FA",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 className="text-center" style={{ color: "#F361AF" }}>
        Create New Blog
      </h2>
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label"
                style={{ color: "#3F3038" }}
              >
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={blog.title}
                onChange={handleChange}
                required
                style={{ boxShadow: "none" }} // Remove shadow
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="imageUrl"
                className="form-label"
                style={{ color: "#3F3038" }}
              >
                Image URL
              </label>
              <input
                type="url"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                value={blog.imageUrl}
                onChange={handleChange}
                required
                style={{ boxShadow: "none" }} // Remove shadow
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="content"
                className="form-label"
                style={{ color: "#3F3038" }}
              >
                Content
              </label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="5"
                value={blog.content}
                onChange={handleChange}
                required
                style={{ boxShadow: "none" }} // Remove shadow
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#F361AF",
                color: "#FFFFFF",
                width: "100%",
              }}
            >
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPage;
