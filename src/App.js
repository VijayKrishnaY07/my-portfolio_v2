import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

import SocialMediaIcons from "./components/SocialMediaIcons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <SocialMediaIcons />
    </div>
  );
}

export default App;
