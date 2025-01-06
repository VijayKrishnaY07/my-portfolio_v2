import React from "react";
import "../styles/SocialMediaIcons.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons

function SocialMediaIcons() {
  return (
    <div className="social-media-icons">
      <a
        href="https://linkedin.com/in/vijay-krishna-yarabarla"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="https://github.com/VijayKrishnaY07?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
