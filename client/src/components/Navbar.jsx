import React from "react";
import "./styles/_navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h4 className="logo">ANSHU BLOG</h4>
        <div className="links">
          <Link className="link" to="?category=art"><h6>Art</h6></Link>
          <Link className="link" to="?category=cars"><h6>Cars</h6></Link>
          <Link className="link" to="?category=food"><h6>Food</h6></Link>
          <Link className="link" to="?category=tech"><h6>Tech</h6></Link>
          <span>Anshuman</span>
          <button>Logout</button>
          <Link className="link write" to="/write"><h6>Write</h6></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
