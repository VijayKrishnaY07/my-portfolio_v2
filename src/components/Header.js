import React from "react";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <CallSplitOutlinedIcon className="icon" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="/Vijay_Krishna_Yarabarla_Front_End_Developer.pdf" // Corrected path to the resume file
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
