import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact 📞📨", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>P</span>ortfolio
      </Link>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.path} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;