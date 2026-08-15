import "./About.css";
import photo from "../assets/photo.jpg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img src={photo} alt="Jeevana Reddy" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <div className="glass-card">
            <p>
              Software Engineer with 3.6 years of experience
              specializing in React.js, Next.js, TypeScript,
              Redux Toolkit, GraphQL and Material UI.

              I am passionate about building responsive,
              accessible and high-performance web applications
              that deliver exceptional user experiences.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <h3>3.6+</h3>
                <span>Years Experience</span>
              </div>

              <div className="stat-card">
                <h3>2+</h3>
                <span>Major Projects</span>
              </div>

              <div className="stat-card">
                <h3>10+</h3>
                <span>Technologies</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}