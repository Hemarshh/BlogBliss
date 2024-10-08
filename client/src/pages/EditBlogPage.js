import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching the blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

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
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blog);
      navigate(`/blogs/${id}`);
    } catch (error) {
      console.error("Error updating the blog:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  return (
    <div className="py-3">
      <div
        className="container mt-4 p-4"
        style={{
          backgroundColor: "#FDF6FA",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center" style={{ color: "#F361AF" }}>
          Edit Blog
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-6 mb-3">
            <label className="form-label" style={{ color: "#3F3038" }}>
              Current Image
            </label>
            <div
              className="border rounded overflow-hidden shadow-sm"
              style={{ height: "400px" }}
            >
              {blog.imageUrl ? (
                <img
                  src={blog.imageUrl}
                  alt="Blog"
                  className="img-fluid"
                  style={{
                    objectFit: "contain",
                    maxHeight: "100%",
                    width: "100%",
                  }}
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100">
                  <p className="text-muted">There is no image</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
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
                  marginBottom: "10px", // Add margin below the button
                }}
              >
                Update Blog
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleDelete}
                style={{
                  backgroundColor: "#FDAED8", // Light pink color for delete button
                  color: "#3F3038",
                  width: "100%",
                }}
              >
                Delete Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
