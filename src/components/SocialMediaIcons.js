import React from "react";
import { Box, IconButton } from "@mui/material";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <Box
      sx={{
        position: { xs: "relative", md: "fixed" },
        top: { md: "50%" },
        left: { md: "1rem" },
        transform: { md: "translateY(-50%)" },
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "1.5rem", md: "1.2rem" },
        zIndex: 100,
        mt: { xs: "2rem", md: 0 },
        pb: { xs: "1.5rem", md: 0 },
      }}
    >
      <IconButton
        component="a"
        href="https://linkedin.com/in/vijay-krishna-yarabarla"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#8892b0",
          fontSize: "1.8rem",
          transition: "color 0.3s ease-in-out",
          "&:hover": { color: "#64ffda" },
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
          color: "#8892b0",
          fontSize: "1.8rem",
          transition: "color 0.3s ease-in-out",
          "&:hover": { color: "#64ffda" },
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
          color: "#8892b0",
          fontSize: "1.8rem",
          transition: "color 0.3s ease-in-out",
          "&:hover": { color: "#64ffda" },
        }}
      >
        <FaTwitter />
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
