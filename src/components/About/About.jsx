import SectionHeader from "../shared/SectionHeader";
import RevealSection  from "../shared/RevealSection";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="divider" />

      <SectionHeader
        label="Who I Am"
        title={<>Crafting <em>pixels</em><br />& logic.</>}
      />

      <div className="about-grid">
        {/* Visual */}
        <RevealSection>
          <div className="about-visual">
            <div className="about-visual-inner">
              <div className="about-avatar">YN</div>
            </div>
            <div className="about-visual-tag">Based in Your City</div>
            <div className="about-corner" />
          </div>
        </RevealSection>

        {/* Text */}
        <RevealSection delay={150}>
          <div className="about-text">
            <p>Hello! I'm a passionate full-stack developer with a love for creating intuitive and impactful digital experiences. I believe great software is both technically excellent and beautifully crafted.</p>
            <p>With years of experience across the stack, I bring a holistic perspective to every project — from database architecture to pixel-perfect UI. I thrive in collaborative environments and love solving hard problems elegantly.</p>
            <p>When I'm not coding, you'll find me exploring design systems, contributing to open source, or obsessing over a perfectly pulled espresso.</p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="stat-num">5+</div>
                <div className="stat-label">Years Exp.</div>
              </div>
              <div className="about-stat">
                <div className="stat-num">40+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="about-stat">
                <div className="stat-num">20+</div>
                <div className="stat-label">Clients</div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}