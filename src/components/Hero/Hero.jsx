import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      {/* Decorative corner brackets */}
      <div className="hero-corner-tl" />
      <div className="hero-corner-br" />

      <div className="hero-content">
        <div className="hero-eyebrow">Available for work</div>

        <h1 className="hero-title">
          Neerukonda
          <br />
          <em>Durga Prasad</em>
        </h1>

        <p className="hero-sub">
          Full-stack developer crafting elegant digital experiences.
          I turn complex problems into beautiful, performant solutions.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact"  className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-number">01</div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}