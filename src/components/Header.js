import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion"; // Import Framer Motion for smooth animation

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    {
      label: "Resume",
      href: "/Vijay_Krishna_Resume.pdf",
      external: true,
    },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          background: "#0b132b",
          backdropFilter: "blur(8px)",
          transition: "max-height 0.4s ease-in-out, padding 0.3s ease-in-out",
          maxHeight: menuOpen ? "300px" : "64px", // Smooth height transition
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: menuOpen ? "column" : "row",
              alignItems: "center",
              paddingBottom: menuOpen ? "0.5rem" : "0",
            }}
          >
            {/* Logo & Menu Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <IconButton edge="start" color="inherit" aria-label="logo">
                <CallSplitOutlinedIcon
                  sx={{ fontSize: "2rem", color: "#64ffda" }}
                />
              </IconButton>

              {/* Desktop Navigation Links (Always visible) */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                {navLinks.map((link, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      padding: "0.4rem 1rem",
                      borderRadius: "5px",
                      transition:
                        "color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        color: "#64ffda",
                        boxShadow: "0px 4px 15px #64ffda", // Glowing effect
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>

              {/* Mobile Menu Button with Smooth Transition */}
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleMenuToggle}
                sx={{
                  display: { xs: "block", md: "none" },
                  transition: "transform 0.3s ease-in-out", // Smooth rotation effect
                }}
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 180 : 0 }} // Smoothly rotate icon
                  transition={{ duration: 0.3 }}
                >
                  {menuOpen ? (
                    <CloseIcon sx={{ fontSize: "2rem", color: "#64ffda" }} />
                  ) : (
                    <MenuIcon sx={{ fontSize: "2rem", color: "#64ffda" }} />
                  )}
                </motion.div>
              </IconButton>
            </Box>

            {/* Mobile Navigation Links (Only visible when menu is opened) */}
            <Box
              sx={{
                display: menuOpen ? "flex" : "none",
                flexDirection: "column",
                gap: 1.5,
                alignItems: "center",
                mt: "1rem",
                width: "100%",
                transition:
                  "opacity 0.4s ease-in-out, transform 0.3s ease-in-out",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(-10px)", // Smooth dropdown effect
              }}
            >
              {navLinks.map((link, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    padding: "0.4rem 1rem",
                    borderRadius: "5px",
                    transition:
                      "color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      color: "#64ffda",
                      boxShadow: "0px 4px 15px #64ffda", // Glowing effect
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
