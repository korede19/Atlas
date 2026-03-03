"use client";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
import { NAV_LINKS, WHATSAPP_SCRATCH } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <Link href="/" className={styles.logo} aria-label="Phoenix Atlas — home">
        Phoenix Atlas
      </Link>

      <ul className={styles.links} role="list">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <button
          className={styles.themeToggle}
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          type="button"
        >
          <span
            className={`${styles.themeIcon} ${styles.moon}`}
            aria-hidden="true"
          >
            🌙
          </span>
          <span
            className={`${styles.themeIcon} ${styles.sun}`}
            aria-hidden="true"
          >
            ☀️
          </span>
        </button>
        <a
          href={WHATSAPP_SCRATCH}
          className={styles.waCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us →
        </a>
      </div>
    </nav>
  );
}
