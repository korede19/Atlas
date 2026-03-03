import { TRUST_FAQS } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Trust() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>
          <span className={styles.labelNum}>05 /</span> Our Guarantee
        </div>
        <div className={`${styles.block} reveal`}>
          <h2 className={styles.title}>
            We don&apos;t get paid in full until <em>you&apos;re satisfied.</em>
          </h2>
          <p className={styles.bodyP} style={{ maxWidth: "600px" }}>
            60% deposit to start. 40% on your approval of the final work. Two
            full revision rounds are included. We don&apos;t release files until
            you&apos;re genuinely happy — not just satisfied enough to stop
            complaining.
          </p>
          <div className={styles.faqGrid}>
            {TRUST_FAQS.map((faq) => (
              <div key={faq.id}>
                <h3 className={styles.faqQ}>{faq.question}</h3>
                <p className={styles.faqA}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
