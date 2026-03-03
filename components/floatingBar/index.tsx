"use client";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_SCRATCH } from "@/lib/constant";
import styles from "./styles.module.css";

export default function FloatingBar() {
  const [hidden, setHidden] = useState(false);
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    ioRef.current = new IntersectionObserver(
      ([e]) => setHidden(e.isIntersecting),
      { threshold: 0.1 }
    );
    ioRef.current.observe(footer);
    return () => ioRef.current?.disconnect();
  }, []);

  return (
    <div
      className={`${styles.bar} ${hidden ? styles.hidden : ""}`}
      role="complementary"
      aria-label="Quick contact"
    >
      <p className={styles.text}>
        <strong>No website yet?</strong> We build from scratch. 4 promo slots
        left.
      </p>
      <a
        href={WHATSAPP_SCRATCH}
        className={styles.cta}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat Now →
      </a>
    </div>
  );
}
