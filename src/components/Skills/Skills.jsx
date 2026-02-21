import { useRef } from "react";
import { skills } from "../../data/data";
import useIntersection from "../../hooks/useIntersection";
import SectionHeader   from "../shared/SectionHeader";
import RevealSection   from "../shared/RevealSection";
import "./Skills.css";

/* ─── SkillBar ───────────────────────────────────────── */
function SkillBar({ name, pct, delay = 0 }) {
  const ref     = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.5 });

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: `${pct}%`,
            transitionDelay: `${delay}ms`,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Skills section ─────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills">
      <div className="divider" />

      <SectionHeader
        label="Expertise"
        title={<>Tools &amp; <em>skills.</em></>}
      />

      <div className="skills-grid">
        {skills.map((category, ci) => (
          <RevealSection key={category.title} delay={ci * 120}>
            <div className="skill-category">
              <div className="skill-cat-title">{category.title}</div>
              <div className="skill-cat-sub">{category.sub}</div>

              {category.items.map((item, ii) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  pct={item.pct}
                  delay={ii * 100}
                />
              ))}
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}