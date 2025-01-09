import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import SocialMediaIcons from "./components/SocialMediaIcons";

function App() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden", // Prevent horizontal scrolling
        position: "relative", // Ensure absolute/fixed elements align properly
      }}
    >
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <SocialMediaIcons />
    </Box>
  );
}

export default App;
