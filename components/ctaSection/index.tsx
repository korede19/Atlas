import Link from "next/link";
import { WHATSAPP_SCRATCH, CAL_LINK, SLOTS } from "@/lib/constant";
import styles from "./styles.module.css";

export default function CtaSection() {
  const slots = Array.from({ length: SLOTS.total }, (_, i) =>
    i < SLOTS.taken ? "taken" : "open"
  );
  return (
    <section className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <p className={styles.pre}>⬥ 2026 Q2 Promo</p>
      <h2 className={`${styles.h2} reveal`}>
        The best time to build your brand
        <br />
        was last year.
        <br />
        <em>The second best time is now.</em>
      </h2>
      <p className={`${styles.sub} reveal`}>
        Every week without a professional presence is compounding credibility
        that belongs to your competitors.
      </p>
      <div
        className={`${styles.slots} reveal`}
        aria-label={`${SLOTS.taken} of ${SLOTS.total} slots claimed`}
      >
        {slots.map((s, i) => (
          <div
            key={i}
            className={s === "taken" ? styles.slotTaken : styles.slotOpen}
          />
        ))}
      </div>
      <p className={`${styles.slotText} reveal`}>
        {SLOTS.taken} of {SLOTS.total} slots claimed —{" "}
        {SLOTS.total - SLOTS.taken} remaining
      </p>
      <div className={`${styles.btns} reveal`}>
        <a
          href={WHATSAPP_SCRATCH}
          className={styles.btnPrimary}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start My Brand → WhatsApp Us Now
        </a>
        <a
          href={CAL_LINK}
          className={styles.btnGhost}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call Instead
        </a>
      </div>
      <p className={`${styles.micro} reveal`}>
        No pressure. No pitch. Just an honest conversation about what a premium
        brand would do for your practice.&nbsp;·&nbsp;
        <Link href="#packages">See packages ↑</Link>
      </p>
    </section>
  );
}
