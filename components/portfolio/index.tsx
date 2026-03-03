import { PORTFOLIO_ITEMS, WHATSAPP_SCRATCH } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Portfolio() {
  return (
    <section className={styles.wrap} id="work">
      {/* Section header */}
      <div className={styles.header}>
        <div className={`${styles.headerLabel} reveal`}>
          <span className={styles.headerLabelNum}>02 /</span> Our Work
        </div>
        <h2 className={`${styles.headerTitle} reveal`}>
          We don&apos;t show quantity.
          <br />
          <em>We show what&apos;s possible.</em>
        </h2>
      </div>

      {/* 3×2 grid */}
      <div className={styles.grid}>
        {PORTFOLIO_ITEMS.map((item) => (
          <div key={item.id} className={`${styles.item} reveal`}>
            {/* Placeholder text (replace with <Image /> when you have screenshots) */}
            <div
              className={styles.placeholder}
              style={
                item.isSlot ? { color: "var(--gold)", opacity: 0.7 } : undefined
              }
            >
              {item.placeholder}
              <br />
              <span className={styles.placeholderSub}>
                {item.placeholderSub}
              </span>
            </div>

            {/* Hover overlay */}
            <div className={styles.overlay}>
              {item.isSlot ? (
                <a
                  href={item.ctaHref}
                  className={styles.overlayText}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim This Slot
                </a>
              ) : (
                <span className={styles.overlayText}>View Project</span>
              )}
            </div>

            {/* Bottom label */}
            <p
              className={styles.category}
              style={
                item.isSlot ? { color: "var(--gold)", opacity: 0.7 } : undefined
              }
            >
              {item.category}
            </p>
            <p
              className={styles.name}
              style={item.isSlot ? { color: "var(--gold)" } : undefined}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* CTA row below grid */}
      <div className={styles.ctaRow}>
        <p className={styles.note}>
          Replace placeholders with your best project screenshots.
        </p>
        <a
          href={WHATSAPP_SCRATCH}
          className={styles.btnGhost}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start My Brand →
        </a>
      </div>
    </section>
  );
}
