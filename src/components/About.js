import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import reactIcon from "../assets/React.jpeg";
import nextIcon from "../assets/next.jpeg";
import typescriptIcon from "../assets/ts.jpeg";
import htmlIcon from "../assets/HTML.jpeg";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.jpeg";
import tailwindIcon from "../assets/tailwind.jpeg";
import graphqlIcon from "../assets/graphql.jpeg";
import gitIcon from "../assets/git.jpeg";
import npmIcon from "../assets/npm2.jpeg";
import nodeIcon from "../assets/node2.jpeg";
import firebaseIcon from "../assets/firebase.jpeg";

const skills = [
  { img: reactIcon, name: "React.js" },
  { img: nextIcon, name: "Next.js" },
  { img: typescriptIcon, name: "TypeScript" },
  { img: htmlIcon, name: "HTML5" },
  { img: cssIcon, name: "CSS3" },
  { img: jsIcon, name: "JavaScript" },
  { img: tailwindIcon, name: "Tailwind" },
  { img: graphqlIcon, name: "GraphQL" },
  { img: gitIcon, name: "Git & GitHub" },
  { img: npmIcon, name: "NPM" },
  { img: nodeIcon, name: "Node.js" },
  { img: firebaseIcon, name: "Firebase" },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "4rem 2rem", md: "6rem 10%" },
        backgroundColor: "#0b132b",
        color: "white",
      }}
    >
      {/* About Me Section */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography variant="h3" fontWeight="bold" color="#64ffda" mb={2}>
          About Me
        </Typography>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Passionate Front-End Developer Crafting Engaging Web Experiences
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#8892b0",
            textAlign: "justify",
          }}
        >
          I specialize in building{" "}
          <strong>
            interactive, scalable, and high-performance web applications.
          </strong>{" "}
          My expertise lies in{" "}
          <strong>React.js, JavaScript, TypeScript,</strong> and UI frameworks
          like
          <strong> Material-UI & Tailwind CSS.</strong> I focus on{" "}
          <strong>clean, accessible, and visually appealing</strong> digital
          experiences.
        </Typography>
      </Box>

      {/* Skills Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#121e33",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: { xs: "100%", md: "45%" },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#64ffda"
          textAlign="center"
          mb={3}
        >
          Technologies I Work With
        </Typography>

        {/* Skills Grid */}
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={4} sm={3} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "#0b132b",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 15px #64ffda",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={skill.img}
                  alt={skill.name}
                  sx={{
                    width: 50,
                    height: 50,
                    objectFit: "contain",
                    marginBottom: "0.5rem",
                  }}
                />
                <CardContent sx={{ textAlign: "center", padding: "0" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#8892b0",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
