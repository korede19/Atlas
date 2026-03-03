import { TESTIMONIALS } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Testimonials() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>
          <span className={styles.labelNum}>06 /</span> What Clients Say
        </div>
        <h2 className={`${styles.title} reveal`}>
          Results that speak louder
          <br />
          <em>than any pitch.</em>
        </h2>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <article key={t.id} className={`${styles.card} reveal`}>
              <div className={styles.mark} aria-hidden="true">
                &ldquo;
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <p className={styles.author}>{t.author}</p>
              <p className={styles.role}>{t.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
