import React, { useState, useEffect } from "react";
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
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

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
    link: "https://vijaykrishnay07.github.io/E-Commerce/",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "An e-commerce platform with user registration, Google Sign-In, and add-to-cart features.",
    image: e_commerce,
    link: "https://vijaykrishnay07.github.io/E-Commerce/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    image: weather_app,
    link: "https://vijaykrishnay07.github.io/E-Commerce/",
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    image: chat_application,
    link: "https://vijaykrishnay07.github.io/E-Commerce/",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  // Adjust the number of visible projects based on screen size
  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(window.innerWidth < 600 ? 1 : 3);
    };
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

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
        sx={{
          position: "relative",
          overflow: "hidden",
          padding: "20px",
        }}
      >
        {/* Left Navigation Arrow */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0%",
            transform: "translateY(-50%)",
            color: "#64ffda",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fontSize: "2rem",
            zIndex: 10,
            borderRadius: "50%",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#64ffda",
              color: "#0b132b",
              boxShadow: "0px 0px 15px #64ffda",
            },
          }}
        >
          <ArrowBackIosNew fontSize="large" />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${
              currentIndex * (100 / projectsPerPage)
            }%)`,
            gap: "12px",
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                flex: `0 0 ${100 / projectsPerPage}%`, // Adjust card width based on screen size
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#1c2541",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "350px",
                  position: "relative",
                  transition: "box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0px 0px 25px rgba(100, 255, 218, 0.8)", // Glow effect only when hovered
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
                      "&:hover": {
                        boxShadow: "0px 6px 25px rgba(100, 255, 218, 0.7)",
                      },
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
            right: "0%",
            transform: "translateY(-50%)",
            color: "#64ffda",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            fontSize: "2rem",
            zIndex: 10,
            borderRadius: "50%",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#64ffda",
              color: "#0b132b",
              boxShadow: "0px 0px 15px #64ffda",
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
