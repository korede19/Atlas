import { PROCESS_STEPS } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Process() {
  return (
    <section className={styles.wrap} id="process">
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>
          <span className={styles.labelNum}>04 /</span> How It Works
        </div>
        <h2 className={`${styles.title} reveal`}>
          From first message to <em>fully launched</em> — three steps.
        </h2>
        <p
          className={`${styles.bodyP} reveal`}
          style={{ maxWidth: "500px", marginTop: ".8rem" }}
        >
          You run a consulting business. Your time is your most valuable asset.
          We&apos;ve made this as frictionless as possible.
        </p>
        <div className={styles.list}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className={`${styles.item} reveal`}>
              <div className={styles.num} aria-hidden="true">
                {step.number}
              </div>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                <p className={styles.stepNote}>{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
