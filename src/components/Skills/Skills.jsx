import { skills } from "../../data/data";
import SectionHeader from "../shared/SectionHeader";
import RevealSection  from "../shared/RevealSection";
import "./Skills.css";

const LEVEL_MAP = {
  beginner:     { label: "Beginner",     dots: 1 },
  intermediate: { label: "Intermediate", dots: 2 },
  expert:       { label: "Expert",       dots: 3 },
};

function SkillItem({ name, level }) {
  const { label, dots } = LEVEL_MAP[level] || LEVEL_MAP.beginner;

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className={`skill-badge skill-badge--${level}`}>{label}</span>
      </div>
      <div className="skill-dots">
        {[1, 2, 3].map((d) => (
          <span key={d} className={`skill-dot ${d <= dots ? "filled" : ""}`} />
        ))}
      </div>
    </div>
  );
}

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

              {category.items.map((item) => (
                <SkillItem key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}