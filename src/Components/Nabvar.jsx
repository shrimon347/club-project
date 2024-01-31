/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./navbar.css";

const Nabvar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/"><h3 className="logo">ClubHub</h3></Link>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/club" className="">
            <li>Club</li>
          </Link>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/club" className="">
            <li>Club</li>
          </Link>
        </ul>
       
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};

export default Nabvar;
