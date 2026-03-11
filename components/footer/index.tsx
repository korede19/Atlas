import Link from "next/link";
import { WHATSAPP_SCRATCH, WHATSAPP_BASE } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.band}>
        <p className={styles.bandText}>
          <em>Every week you wait, a competitor gains ground.</em>
        </p>
        <a
          href={WHATSAPP_SCRATCH}
          className={styles.bandCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Claim Your Slot in 60 Seconds
        </a>
      </div>
      <footer className={styles.footer}>
        <div className={styles.logo}>Phoenix Atlas</div>
        <nav aria-label="Footer navigation">
          <ul className={styles.links} role="list">
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#packages">Pricing</Link>
            </li>
            <li>
              <Link href="#process">Process</Link>
            </li>
            <li>
              <a href={WHATSAPP_BASE} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.copy}>
          &copy; 2026 Phoenix Atlas &middot; All rights reserved.
        </p>
      </footer>
    </>
  );
}
