import { useState, useEffect, useRef } from "react";
import "./index.css";

import Navbar   from "./components/Navbar/Navbar";
import Hero     from "./components/Hero/Hero";
import About    from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills   from "./components/Skills/Skills";
import Contact  from "./components/Contact/Contact";
import Footer   from "./components/Footer/Footer";

export default function App() {
  const [cursor,  setCursor]  = useState({ x: -100, y: -100 });
  const [ring,    setRing]    = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef  = useRef(null);

  /* ── Custom cursor with lerp ring ───────────────────── */
  useEffect(() => {
    const onMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });

      const lerp = (a, b, t) => a + (b - a) * t;
      const animate = () => {
        ringPos.current = {
          x: lerp(ringPos.current.x, e.clientX, 0.1),
          y: lerp(ringPos.current.y, e.clientY, 0.1),
        };
        setRing({ ...ringPos.current });
        rafRef.current = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── Hover detection ────────────────────────────────── */
  useEffect(() => {
    const targets = document.querySelectorAll("a, button, .project-card");
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Noise texture */}
      <div className="noise" />

      {/* Custom cursor */}
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      <div
        className={`cursor-ring ${hovered ? "hovered" : ""}`}
        style={{ left: ring.x, top: ring.y }}
      />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}