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
          From first message to <em>fully launched</em> — The 3-Step Blueprint.
        </h2>
        <p
          className={`${styles.bodyP} reveal`}
          style={{ maxWidth: "500px", marginTop: ".8rem" }}
        >
          You scale businesses; we build the infrastructure. Our process is
          designed to be high-impact and low-friction for your schedule.
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
