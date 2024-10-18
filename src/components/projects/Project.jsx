import React from "react";
import "./project.css";
import IMG1 from "../../assets/portfolio.png";
import IMG2 from "../../assets/clickshop.png";
import IMG3 from "../../assets/engrhire.png";
import IMG4 from "../../assets/6sense-efficiency.png";
import IMG5 from "../../assets/6sensehq.png";
import IMG6 from "../../assets/random.jpg";

const portfolioData = [
  // {
  //   img: IMG1,
  //   title: "My Responsive Portfolio",
  //   description:
  //     "Created a dynamic portfolio using React, showcasing my skills in web development and highlighting a diverse range of projects. Implemented responsive design principles to ensure optimal viewing across devices Additionally, integrated contact functionality to facilitate communication.",
  //   githubLink: "https://github.com/Pro-shanto06/portfolio",
  //   liveLink: "https://proshanto.vercel.app",
  // },
  {
    img: IMG4,
    title: "6sense Efficiency",
    description:
      "An employee performance tracking system developed by integrating Jira and Trello APIs to manage and monitor tasks. The system allowed adding team members, tracking their daily assigned and completed tasks, and calculating performance metrics based on task completion rates.",
    liveLink: "https://6sense-efficiency.vercel.app",
  },
  {
    img: IMG5,
    title: "6senseHQ",
    description:
      "Developed the backend for 6sense Technologies using Express.js, integrating third-party services like Brevo and Mixpanel for event tracking and analytics. Implemented a contact form that captures user submissions and saves the email data in Brevo for streamlined communication.",
    liveLink: "https://6sensehq.vercel.app",
  },
  {
    img: IMG6,
    title: "Dev Community API",
    description:
      "Built a NestJS and MongoDB-based API with JWT authentication for managing posts and comments. The API supports user registration, login, and full CRUD operations for both posts and comments, ensuring secure and efficient community interactions.",
    githubLink: "https://github.com/Pro-shanto06/Dev_Community",
  },
  {
    img: IMG6,
    title: "Online Task Management",
    description:
      "Developed a user-friendly web platform using the MERN stack, featuring dynamic task tables for efficient task tracking and management. Implemented secure authentication mechanisms for administrators and users.",
    githubLink: "https://github.com/Pro-shanto06/Online-Task-Management",
  },
  {
    img: IMG2,
    title: "Angular Ecommerce",
    description:
      "MEAN stack e-commerce project with dynamic product tables, dashboard, and cart management for an enhanced user experience. Implemented secure authentication using JWT for administrators and users.",
    githubLink: "https://github.com/Pro-shanto06/1st-angular-app",
    liveLink: "https://1st-angular-app.netlify.app",
  },
  {
    img: IMG3,
    title: "Freelancing Platform",
    description:
      "Using HTML, CSS, JavaScript and NodeJs Construction freelancing platform with streamlined communication, bidding, and secure transactions.",
    githubLink: "https://github.com/Pro-shanto06/EngrHire",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {portfolioData.map((project, index) => (
          <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.img} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio__item-cta">
              {project.githubLink && (
                <a href={project.githubLink} className="btn" target="_blank">
                  Github
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
