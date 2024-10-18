import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const skillsData = {
  "Programming Languages": ["C", "C++", "Java", "JavaScript"],
  Frameworks: ["NestJS", "Express.js", "Angular", "React"],
  "Database Management": ["MongoDB", "MySQL", "PostgreSQL"],
  "Version Control": ["Git", "GitHub"],
  "Web Development": ["HTML", "CSS", "Bootstrap"],
  Core: ["OOP", "Operating System", "Data Structure", "Algorithm"],
};

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        {Object.keys(skillsData).map((category) => (
          <div className="experience__category" key={category}>
            <h3>{category}</h3>
            <div className="experience__content">
              {skillsData[category].map((skill) => (
                <article className="experience__details" key={skill}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
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
