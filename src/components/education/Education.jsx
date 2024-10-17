import React from "react";
import "./education.css";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Science and Engineering",
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
      title: "Software Enginner Intern",
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
    <section id="education">
      <h5>What Qualifications I have</h5>
      <h2>My Personal Journey</h2>
      <div className="container education__container">
        <div className="education__content">
          <h3>Education</h3>
          {educationData.map((edu, index) => (
            <article key={index} className="education__item">
              <div className="education__icon">
                <FaGraduationCap />
              </div>
              <div className="education__duration">{edu.duration}</div>
              <h4 className="education__title">{edu.title}</h4>
              <p className="education__institution">{edu.institution}</p>
              <p className="education__grade">{edu.grade}</p>
            </article>
          ))}
        </div>

        <div className="education__content">
          <h3>Experience</h3>
          {experienceData.map((exp, index) => (
            <article key={index} className="education__item">
              <div className="education__icon">
                <MdOutlineWork />
              </div>
              <div className="education__duration">{exp.duration}</div>
              <h4 className="education__title">{exp.title}</h4>
              <p className="education__institution">{exp.institution}</p>
              <p className="education__description">{exp.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
