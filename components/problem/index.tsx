import { problems } from "@/utils/data";
import styles from "./styles.module.css";

export default function Problem() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>
          <span className={styles.labelNum}>01 /</span> The Problem
        </div>
        <h2 className={`${styles.title} reveal`}>
          No website doesn&apos;t mean no impression.
          <br />
          <em>It means the wrong one.</em>
        </h2>
        <div className={styles.grid}>
          {problems.map((p) => (
            <article key={p.num} className={`${styles.card} reveal`}>
              <div className={styles.num} aria-hidden="true">
                {p.num}
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </article>
          ))}
        </div>
        <blockquote className={`${styles.pull} reveal`}>
          &ldquo;The consultants winning the biggest contracts in Lagos and
          Abuja are not the most experienced. They are the best positioned. And
          positioning starts online.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
