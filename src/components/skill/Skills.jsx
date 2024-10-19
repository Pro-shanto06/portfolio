import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    skills: ["NestJS", "Express.js", "Angular", "React"],
  },
  {
    category: "Database Management",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Core",
    skills: ["OOP", "Operating System", "Data Structure", "Algorithm"],
  },
];

const Skill = () => {
  return (
    <section id="skill">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        {skillsData.map(({ category, skills }) => (
          <div className="skill__category" key={category}>
            <h3>{category}</h3>
            <div className="skill__content">
              {skills.map((skill) => (
                <article className="skill__details" key={skill}>
                  <BsFillPatchCheckFill className="skill__details-icon" aria-label={`Skill: ${skill}`} />
                  <div>
                    <h4>{skill}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
