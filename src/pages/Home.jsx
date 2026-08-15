import "./Home.css";
import photo from "../assets/photo.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="greeting">Hello 👋</p>

        <h1>
          Hi, I'm <span>Jeevana Reddy</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="hero-description">
          Passionate React Developer with 3.6 years of experience
          building scalable, responsive and user-friendly web
          applications using React.js, Next.js, TypeScript,
          GraphQL and Redux Toolkit.
        </p>

        <div className="hero-actions">
          <Link to="/projects">
            <button className="primary-btn">
              View Projects
            </button>
          </Link>

          <Link to="/about">
            <button className="secondary-btn">
              About Me
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img src={photo} alt="Jeevana Reddy" />
      </div>

    </section>
  );
}

export default Home;