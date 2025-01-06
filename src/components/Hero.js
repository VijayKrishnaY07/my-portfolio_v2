import React from "react";
import "../styles/Hero.css";
import myImage from "../assets/myImage.jpeg"; // Update path as per your structure

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I’m</p>
        <h1 className="hero-name">Vijay Krishna</h1>
        <h2 className="hero-title">
          <span className="hero-line">
            Transforming ideas into seamless <br /> and engaging web
            experiences.
          </span>
        </h2>
        <p className="hero-description">
          As a passionate front-end developer, I specialize in crafting
          interactive, responsive, and scalable web applications using modern
          technologies like React.js. My mission is to create high-performance
          digital experiences with clean, intuitive, and accessible user
          interfaces.
        </p>
        <a href="#contact" className="hero-button">
          Let’s Connect & Build Something Amazing!
        </a>
      </div>
      <div className="hero-image">
        <img src={myImage} alt="Vijay Krishna - Web Developer" />
      </div>
    </section>
  );
};

export default Hero;
