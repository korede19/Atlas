import { TICKER_ITEMS } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item} <span className={styles.sep}>·</span>{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
