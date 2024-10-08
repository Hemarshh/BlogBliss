import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NewBlogPage from "./pages/NewBlogPage";
import ShowBlogPage from "./pages/ShowBlogPage";
import EditBlogPage from "./pages/EditBlogPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="new"
            element={
              isAuthenticated ? <NewBlogPage /> : <Navigate to="/login" />
            }
          />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="blogs/:id" element={<ShowBlogPage />} />
          <Route path="blogs/edit/:id" element={<EditBlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
