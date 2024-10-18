import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidBriefcase } from "react-icons/bi";
import "./qualifications.css";

const Qualification = () => {
  const educationData = [
    {
      title: "Bachelor of Science(BSc)",
      institution: "University of Information Technology & Sciences (UITS)",
      duration: "01/2020 - 12/2023",
      grade: "CGPA: 3.81 Out of 4.00",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Government Science College",
      duration: "07/2016 - 04/2018",
      grade: "GPA: 4.08 Out of 5.00",
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Badda Alatunnessa Higher Secondary School",
      duration: "01/2014 - 02/2016",
      grade: "GPA: 5.00 Out of 5.00",
    },
  ];

  const experienceData = [
    {
      title: "Software Engineer Intern",
      institution: "6sense Technologies",
      duration: "07/2024 - 10/2024",
      description:
        "As a Software Engineer Intern, I worked on backend development using NestJS, building and optimizing RESTful APIs. I gained experience in improving server performance, managing databases, and ensuring API security.",
    },
    {
      title: "Industrial Attachment",
      institution: "SELISE Digital Platforms",
      duration: "11/2023 - 11/2023",
      description:
        "During my industrial attachment at SELISE, delving into software development with a focus on the MEAN stack. Created an e-commerce project, showcasing the ability to turn theoretical ideas into real-world applications.",
    },
  ];

  return (
    <section id="qualification">
      <h5>What Qualifications I have</h5>
      <h2>My Personal Journey</h2>
      <div className="container qualification__container">
        <div className="qualification__content">
          <h2>
            <BiSolidBriefcase /> Experience
          </h2>
          {experienceData.map((exp, index) => (
            <article key={index} className="qualification__item">
              <h3 className="qualification__duration">{exp.duration}</h3>
              <h3 className="qualification__title">{exp.title}</h3>
              <h4>{exp.institution}</h4>
              <p>{exp.description}</p>
            </article>
          ))}
        </div>
        
        <div className="qualification__content">
          <h2>
            <FaGraduationCap /> Education
          </h2>
          {educationData.map((edu, index) => (
            <article key={index} className="qualification__item">
              <h3 className="qualification__duration">{edu.duration}</h3>
              <h3 className="qualification__title">{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.grade}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
