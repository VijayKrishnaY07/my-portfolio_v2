import React from "react";
import "../styles/About.css";
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

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
          I'm a <strong>front-end React developer</strong> with a passion for{" "}
          <strong>
            building dynamic, scalable, and high-performance web applications
          </strong>
          . With hands-on experience in modern frameworks.
        </p>
        <p className="about-description">
          My skill set includes{" "}
          <strong>
            React.js, JavaScript (ES6+), TypeScript, Next.js, Redux, GraphQL,
            and API integrations
          </strong>
          . I'm also proficient in{" "}
          <strong>
            CSS frameworks such as Tailwind CSS, Material-UI, and Styled
            Components
          </strong>
          , ensuring <strong>aesthetic and responsive UI designs</strong>.
        </p>
        <p className="about-description">
          I'm comfortable working with{" "}
          <strong>version control systems like Git</strong>, package managers
          like <strong>NPM</strong>, and backend technologies like
          <strong>Node.js & Firebase</strong>. Whether it's developing
          interactive components or optimizing web performance, I ensure{" "}
          <strong>clean, maintainable, and scalable code</strong>.
        </p>
      </div>

      <div className="skills-container">
        <h3 className="skills-heading">Technologies I Work With</h3>
        <div className="skills-grid">
          {[
            { img: reactIcon, name: "React.js" },
            { img: nextIcon, name: "Next.js" },
            { img: typescriptIcon, name: "TypeScript" },
            { img: htmlIcon, name: "HTML5" },
            { img: cssIcon, name: "CSS3" },
            { img: jsIcon, name: "JavaScript" },
            { img: tailwindIcon, name: "Tailwind CSS" },
            { img: graphqlIcon, name: "GraphQL" },
            { img: gitIcon, name: "Git & GitHub" },
            { img: npmIcon, name: "NPM" },
            { img: nodeIcon, name: "Node.js" },
            { img: firebaseIcon, name: "Firebase" },
          ].map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
