import "./Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Shein",
    link: "/shein",
    tech: ["React.js", "Next.js", "GraphQL", "Redux Toolkit"],
    description:
      "Global fashion e-commerce platform built using React, Next.js, GraphQL and Redux Toolkit.",
  },
  {
    title: "Snapdeal",
    link: "/snapdeal",
    tech: ["React.js", "Redux Toolkit", "Next.js"],
    description:
      "Indian e-commerce application focused on performance, SEO and scalable architecture.",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>

        <p className="projects-subtitle">
          Some of the enterprise applications and
          e-commerce platforms I have worked on.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

             
               <Link to={project.link}>
  <button className="project-btn">
    View Details
  </button>
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}