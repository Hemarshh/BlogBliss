import React from "react";
import "../App.css"; // Ensure this is imported if you're using an external CSS file

const Footer = () => (
  <div>
    <center>
      <footer className="footer mt-auto py-3 sticky-bottom">
        <div className="container">
          <span className="text-muted">
            &copy; 2024 BlogBliss. All rights reserved.
          </span>
        </div>
      </footer>
    </center>
  </div>
);

export default Footer;
