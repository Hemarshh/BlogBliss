import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id)); // Update the state to remove the deleted blog
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div
      className="home-container mt-3"
      style={{
        backgroundColor: "#FDF6FA",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
      }}
    >
      <h1
        className="title display-5 text-center my-4"
        style={{ color: "#F361AF", fontWeight: "bold", fontSize: "2.5rem" }} // Enhanced title styling
      >
        Welcome to BlogBliss
      </h1>
      <div className="container mt-4">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-3 mb-4" key={blog._id}>
              <div
                className="card shadow-sm border"
                style={{
                  borderColor: "#F361AF",
                  borderRadius: "10px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={blog.imageUrl}
                  className="card-img-top"
                  alt={blog.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "#FDAED8",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <h5
                    className="card-title"
                    style={{ color: "#3F3038", fontWeight: "600" }}
                  >
                    {blog.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#3F3038",
                      opacity: "0.8",
                      fontSize: "0.9rem",
                    }}
                  >
                    {blog.content.substring(0, 100)}...
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="btn"
                      style={{
                        backgroundColor: "#F361AF",
                        color: "#FFFFFF",
                        width: "48%",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#D14A9A")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#F361AF")
                      }
                    >
                      Read More
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="btn"
                      style={{
                        backgroundColor: "#FF6F61",
                        color: "#FFFFFF",
                        width: "48%",
                        borderRadius: "5px",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#E85A52")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#FF6F61")
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Create New Blog Button at the end of the blog list */}
          <div className="col-md-3 mb-4 d-flex justify-content-center align-items-center">
            <Link
              to="/new"
              className="btn"
              style={{
                backgroundColor: "#F361AF",
                color: "#FFFFFF",
                marginTop: "1rem",
                borderRadius: "50%",
                fontWeight: "bold",
                padding: "20px",
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "background-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D14A9A";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F361AF";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
