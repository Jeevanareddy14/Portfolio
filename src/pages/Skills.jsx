import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMui,
  SiJest,
} from "react-icons/si";

const skills = [
{ name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
{ name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
{ name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
{ name: "React.js", icon: <FaReact color="#61DAFB" /> },
{ name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
{ name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
{ name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
{ name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
{ name: "Material UI", icon: <SiMui color="#007FFF" /> },
{ name: "Jest", icon: <SiJest color="#C21325" /> },
{ name: "Git", icon: <FaGitAlt color="#F05032" /> },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}