import RevealSection from "./RevealSection";

/**
 * Renders the gold label + serif title common to every section.
 *
 * Props:
 *  - label   small all-caps string above the title  (e.g. "Who I Am")
 *  - title   JSX for the large serif heading         (supports <em> for gold italics)
 */
export default function SectionHeader({ label, title }) {
  return (
    <RevealSection className="section-header">
      <div className="section-label">{label}</div>
      <h2 className="section-title">{title}</h2>
    </RevealSection>
  );
}