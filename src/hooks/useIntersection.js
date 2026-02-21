import { useState, useEffect, useRef } from "react";

/**
 * Fires once when `ref` enters the viewport.
 * `options` is captured on mount so the object identity doesn't matter.
 */
export default function useIntersection(ref, options) {
  const [visible, setVisible] = useState(false);
  const optionsRef = useRef(options);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      optionsRef.current
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return visible;
}