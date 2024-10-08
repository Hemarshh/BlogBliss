import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <div
      className="background-container"
      style={{
        backgroundColor: "#FDF6FA",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          flex: "1",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
    <Footer />
  </>
);

export default Layout;
