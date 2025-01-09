import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Import project images
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

  // Determine the number of projects per page based on screen size
  const projectsPerPage = window.innerWidth < 600 ? 1 : 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - projectsPerPage ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "4rem 2rem", md: "6rem 4rem" },
        backgroundColor: "#0b132b",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={4}
        sx={{ color: "#64ffda" }}
      >
        Projects I've Built
      </Typography>

      {/* Project Carousel Container */}
      <Container
        maxWidth="lg"
        sx={{ position: "relative", overflow: "hidden" }}
      >
        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: -40,
            transform: "translateY(-50%)",
            color: "#64ffda",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fontSize: "2.5rem",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 10px #64ffda",
            },
          }}
        >
          <ArrowBackIos fontSize="large" />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${
              currentIndex * (100 / projectsPerPage)
            }%)`,
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                flex: `0 0 ${100 / projectsPerPage}%`, // Adjust card width based on screen size
                transition: "all 0.3s ease-in-out",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c2541",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                  transition: "transform 0.3s ease-in-out",
                  width: "100%",
                  maxWidth: "350px",
                  "&:hover": {
                    boxShadow: "0px 6px 25px rgba(100, 255, 218, 0.7)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderRadius: "10px",
                    height: { xs: "200px", md: "220px" },
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" color="#64ffda">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="#8892b0" mt={1}>
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    sx={{
                      mt: 2,
                      backgroundColor: "#64ffda",
                      color: "#0b132b",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#3a506b" },
                    }}
                  >
                    VIEW PROJECT
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Right Navigation Arrow */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: -40,
            transform: "translateY(-50%)",
            color: "#64ffda",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fontSize: "2.5rem",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0px 0px 10px #64ffda",
            },
          }}
        >
          <ArrowForwardIos fontSize="large" />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Project;
