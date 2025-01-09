import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import myImage from "../assets/myImage.jpeg";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "12% 8%", md: "5% 10%" }, // Increased padding for better spacing
        background: "#0b132b",
        color: "#e6f1ff",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left Section - Text Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "50%" }, // Ensure full width on mobile
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#64ffda",
              mb: 1,
              fontSize: { xs: "1rem", md: "1.2rem" }, // Adjust font size
            }}
          >
            Hello World, I’m
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "4rem" }, // Reduce size on mobile
              color: "#e6f1ff",
              m: 0,
            }}
          >
            Vijay Krishna.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#8892b0",
              fontSize: { xs: "1.5rem", md: "2.4rem" }, // Adjusted for better readability
              fontWeight: 600,
              mt: 1,
              lineHeight: 1.3,
            }}
          >
            I transform ideas into seamless and engaging web experiences.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#8892b0",
              fontSize: { xs: "1rem", md: "1.2rem" },
              lineHeight: 1.6,
              mt: 2,
              maxWidth: "600px",
            }}
          >
            I’m a results-driven Front-End Developer who transforms ideas into
            high-performing web applications. With expertise in React.js and
            modern web technologies, I build seamless, scalable, and
            user-focused digital experiences.
          </Typography>
          <Button
            variant="outlined" // Changed to outlined for a cleaner look
            href="#contact"
            sx={{
              mt: 3,
              border: "1px solid #64ffda",
              color: "#64ffda",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "0.8rem 1.8rem",
              "&:hover": {
                backgroundColor: "#64ffda",
                color: "#0b132b",
              },
            }}
          >
            Let’s Connect & Build Something Amazing!
          </Button>
        </Box>

        {/* Right Section - Image (Only on Laptop Screens) */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" }, // Hide image on mobile
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <img
            src={myImage}
            alt="Vijay Krishna - Web Developer"
            style={{
              width: "100%",
              maxWidth: "350px", // Slightly increased for better proportions
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
