import React, { useState } from "react";
import "../styles/Project.css";
import chat_application from "../assets/chat_application.png";
import e_commerce from "../assets/e_commerce.png";
import todo_list from "../assets/To_do.png";
import weather_app from "../assets/weather.png";

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "An app to manage tasks with drag-and-drop functionality.",
    image: todo_list,
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "An e-commerce platform with registration and add to cart feature.",
    image: e_commerce,
    link: "#",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    image: weather_app,
    link: "#",
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    image: chat_application,
    link: "#",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="project-section">
      <h2 className="project-heading">Projects I've Built</h2>
      <div className="carousel">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &#8592;
        </button>
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 34}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="card">
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
              />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Project;
