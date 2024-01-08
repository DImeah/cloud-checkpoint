import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div>
        <nav className="logo">
          <a href="#">
            <img
              src="/ifarm logo.png
            "
              alt="logo"
            />
            iFarms
          </a>
        </nav>
      </div>
      <div>
        <nav>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="contact">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
