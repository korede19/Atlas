import { STATS } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Stats() {
  return (
    <div className={styles.band} aria-label="Key statistics">
      {STATS.map((s) => (
        <div key={s.id} className={`${styles.stat} reveal`}>
          <div className={styles.num} aria-label={s.value}>
            {s.value}
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
