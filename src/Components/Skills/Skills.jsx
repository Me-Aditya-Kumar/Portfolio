import React from "react";
import "./Skills.css";
import Skills_Data from "../../assets/skills_data";

export const Skills = () => {
  return (
    <div id="skills" className="skills container text-center">
      <div className="skills-title mb-5">
        <h1>Technical Skills</h1>
      </div>
      <div className="row g-4 mb-5 ">
        {Skills_Data.map((skill, index) => {
          return (
            <div key={index} className="col-12 col-md-6 mt-5">
              <div className="skills-format h-100">
                <h2>{skill.s_name}</h2>
                <p>{skill.s_desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
