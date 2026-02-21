import { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 *
 * Props:
 *  - className  extra class names for the wrapper
 *  - delay      transition-delay in ms
 *  - children
 */
export default function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const visible = useIntersection(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}