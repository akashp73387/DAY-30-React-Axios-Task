import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" footer bg-dark">
      <footer className="py-3 ">
        <ul className="nav justify-content-center border-bottom mb-2 pb-2">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2  fs-3 ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/details" className="nav-link px-2  fs-3">
              User Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link px-2  fs-3">
              Create
            </Link>
          </li>
        </ul>
        <p className="text-center footer-text pt-2">© @Praveen Kumar</p>
      </footer>
    </div>
  );
};

export default Footer;
