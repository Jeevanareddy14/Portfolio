import "./ProjectDetails.css";

export default function DetailS() {
  return (
    <section className="project-layout">

      <div className="project-header">
        <h1>
          SNAPDEAL
          <span>(Frontend Developer)</span>
        </h1>
      </div>

      <div className="project-content-scroll">

        <div className="content-section">
          <h2>Project Overview</h2>

          <p>
            Snapdeal is one of India's leading e-commerce
            marketplaces, serving millions of customers across
            multiple product categories. The platform focuses on
            delivering a seamless shopping experience, fast page
            performance, responsive design, and scalable
            architecture capable of handling high user traffic.
          </p>
        </div>

        <div className="content-section">
          <h2>My Contribution</h2>

          <p>
            As a Frontend Developer, I worked extensively on
            building reusable React.js components and creating
            responsive user interfaces using modern frontend
            technologies. I collaborated closely with backend,
            QA, and product teams to deliver new features while
            maintaining code quality and application stability.
            I also participated in code reviews and performance
            optimization initiatives.
          </p>
        </div>

        <div className="content-section">
          <h2>Challenges & Solutions</h2>

          <p>
            One of the key challenges was maintaining fast page
            rendering while displaying large amounts of dynamic
            product data. Through component optimization,
            efficient state management with Redux Toolkit,
            lazy loading techniques, and performance monitoring,
            the application achieved better loading times and
            improved user engagement.
          </p>
        </div>

        <div className="content-section">
          <h2>Technologies Used</h2>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Redux Toolkit</span>
            <span>JavaScript</span>
            <span>Material UI</span>
            <span>Git</span>
          </div>
        </div>

      </div>

    </section>
  );
}