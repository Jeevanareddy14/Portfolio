import "./ProjectDetails.css";

export default function DetailF() {
  return (
    <section className="project-layout">

      <div className="project-header">
        <h1>
          SHEIN
          <span>(Frontend Developer)</span>
        </h1>
      </div>

      <div className="project-content-scroll">

        <div className="content-section">
          <h2>Project Overview</h2>

          <p>
            Shein is an online fashion e-commerce platform that offers trendy clothing, accessories, footwear, and
beauty products at affordable prices. The platform mainly focuses on fast-fashion items for women but also
provides products for men and kids. It operates through a website and mobile application, allowing
customers to browse products, add items to a cart, and purchase them online. Shein is known for quickly
introducing new fashion trends and delivering products to customers worldwide.
           </p>
        </div>

        <div className="content-section">
          <h2>My Contribution</h2>

          <p>
            I developed reusable React components,
            integrated GraphQL APIs and implemented
            Redux Toolkit.
          </p>
        </div>

        <div className="content-section">
          <h2>Challenges & Solutions</h2>

          <p>
            Large product catalog rendering was optimized
            through reusable components and state
            management improvements.
          </p>
        </div>

        <div className="content-section">
          <h2>Technologies Used</h2>

          <div className="tech-stack">
            <span>React.js</span>
            <span>Next.js</span>
            <span>GraphQL</span>
            <span>Redux Toolkit</span>
            <span>TypeScript</span>
          </div>
        </div>

      </div>

    </section>
  );
}