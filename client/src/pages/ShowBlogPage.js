import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const ShowBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching the blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div
      className="container my-4"
      style={{
        backgroundColor: "#FDF6FA",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <div className="text-center">
        <h1 className="title" style={{ color: "#F361AF" }}>
          {blog.title}
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {blog.imageUrl && (
            <div className="my-3">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="img-fluid w-100"
                style={{ borderRadius: "10px" }}
              />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div
            className="content-container p-3 mt-4"
            style={{
              backgroundColor: "#FDAED8",
              borderRadius: "10px",
              color: "#3F3038",
            }}
          >
            <p style={{ color: "#3F3038", lineHeight: "1.6" }}>
              {blog.content}
            </p>
            <div className="d-flex justify-content-between">
              <Link
                to={`/blogs/edit/${id}`}
                className="btn btn-lg"
                style={{
                  backgroundColor: "#F361AF",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                }}
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="btn btn-lg"
                style={{
                  backgroundColor: "#3F3038",
                  color: "#FFFFFF",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogPage;
