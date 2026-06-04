import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailF from "./pages/DetailF";
import DetailS from "./pages/DetailS";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shein" element={<DetailF />} />
        <Route path="/snapdeal" element={<DetailS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


