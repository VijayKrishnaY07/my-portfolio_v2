import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialMediaIcons = () => {
  const [isBottom, setIsBottom] = useState(false);

  // Detect when user reaches the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.innerHeight + window.scrollY;
      setIsBottom(scrollHeight - scrollTop < 50); // Show when near bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: { xs: isBottom ? "fixed" : "absolute", md: "fixed" }, // Fixed at bottom for mobile, fixed on left for laptop
        left: { md: "1rem" }, // Align to left on laptop
        bottom: { xs: "1rem", md: "auto" }, // At bottom on mobile, auto on laptop
        top: { md: "50%" }, // Center vertically on laptop
        transform: { md: "translateY(-50%)" }, // Center alignment for laptop
        display: "flex",
        flexDirection: { xs: "row", md: "column" }, // Row on mobile, column on laptop
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        width: { xs: "100%", md: "auto" }, // Full width on mobile to center align
        backgroundColor: { xs: "transparent", md: "transparent" }, // No background color
        visibility: { xs: isBottom ? "visible" : "hidden", md: "visible" }, // Show only at bottom for mobile
        transition: "visibility 0.3s ease-in-out",
        zIndex: 100,
      }}
    >
      <IconButton
        component="a"
        href="https://linkedin.com/in/vijay-krishna-yarabarla"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#3a506b",
          fontSize: { xs: "1.8rem", md: "2rem" },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: "#64ffda",
            transform: "scale(1.2)",
            boxShadow: "0px 0px 10px rgba(100, 255, 218, 0.7)",
          },
        }}
      >
        <FaLinkedin />
      </IconButton>

      <IconButton
        component="a"
        href="https://github.com/VijayKrishnaY07?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#3a506b",
          fontSize: { xs: "1.8rem", md: "2rem" },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: "#64ffda",
            transform: "scale(1.2)",
            boxShadow: "0px 0px 10px rgba(100, 255, 218, 0.7)",
          },
        }}
      >
        <FaGithub />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#3a506b",
          fontSize: { xs: "1.8rem", md: "2rem" },
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: "#64ffda",
            transform: "scale(1.2)",
            boxShadow: "0px 0px 10px rgba(100, 255, 218, 0.7)",
          },
        }}
      >
        <FaTwitter />
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
