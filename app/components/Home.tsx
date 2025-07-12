"use client"

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTheme } from "../hooks/useTheme";
import Footer from "./Footer";

export default function ClientHome() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="antialiased transition-colors duration-300">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
  );
}
