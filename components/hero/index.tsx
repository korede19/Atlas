import Link from "next/link";
import { WHATSAPP_SCRATCH } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.left}>
        <p className={styles.eyebrow}>2026 Q2 Promo&nbsp;·&nbsp;7 Slots Only</p>

        <h1 className={styles.h1}>
          Still sending clients
          <br />
          to your{" "}
          <span className={styles.igWord}>
            <span className={styles.igIcon} aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5.5"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.5"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
            </span>
            <em>Instagram</em>
          </span>
          <br />
          <span className={styles.dmsWord}>DMs?</span>
        </h1>

        <div className={styles.subWrap}>
          <p className={styles.sub}>
            Corporate clients don’t &quot;slide into DMs.&quot; They conduct due
            diligence. They Google your name, audit your digital footprint, and
            decide your worth in 60 seconds.{" "}
            <strong>
              Without a professional digital presence, that decision is never in
              your favour.
            </strong>
          </p>
          <div className={styles.btns}>
            <a
              href={WHATSAPP_SCRATCH}
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Build My Brand → WhatsApp Us
            </a>
            <Link href="#packages" className={styles.btnGhost}>
              See Packages ↓
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right: Decorative Mockups ── */}
      <div className={styles.right} aria-hidden="true">
        <div className={styles.mockScene}>
          {/* Browser */}
          <div className={styles.mockBrowser}>
            <div className={styles.mockBrowserBar}>
              <div className={`${styles.mockDot} ${styles.dotRed}`} />
              <div className={`${styles.mockDot} ${styles.dotYel}`} />
              <div className={`${styles.mockDot} ${styles.dotGrn}`} />
              <div className={styles.mockAddress}>
                <span className={styles.mockUrl}>yourname.com</span>
              </div>
            </div>
            <div className={styles.miniSite}>
              <div className={styles.miniHero}>
                <div className={styles.miniNav}>
                  <span className={styles.miniLogoText}>YOUR NAME</span>
                  <div className={styles.miniNavLinks}>
                    <div className={styles.miniNavLink} />
                    <div className={styles.miniNavLink} />
                    <div className={styles.miniNavLink} />
                  </div>
                </div>
                <div className={styles.miniH1Block}>
                  <div className={`${styles.miniH1Line} ${styles.w80}`} />
                  <div className={`${styles.miniH1Line} ${styles.w60}`} />
                  <div className={styles.miniH1Sub} />
                  <div className={styles.miniCta} />
                </div>
              </div>
              <div className={styles.miniBody}>
                {[0, 1, 2].map((i) => (
                  <div key={i} className={styles.miniCard}>
                    <div className={`${styles.miniCardLine} ${styles.w100}`} />
                    <div className={`${styles.miniCardLine} ${styles.w70}`} />
                    <div className={`${styles.miniCardLine} ${styles.w55}`} />
                  </div>
                ))}
              </div>
              <div className={styles.miniFooterStrip}>
                <div className={styles.miniFooterDot} />
                <div className={styles.miniFooterLine} />
                <div
                  className={styles.miniFooterDot}
                  style={{ opacity: 0.25 }}
                />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className={styles.mockPhone}>
            <div className={styles.mockPhoneNotch}>
              <div className={styles.mockPhoneDot} />
            </div>
            <div className={styles.mockPhoneBody}>
              <div className={styles.phoneHeroStrip}>
                <div className={styles.phLine} />
                <div className={`${styles.phLine} ${styles.sm}`} />
                <div className={styles.phCta} />
              </div>
              <div className={styles.phoneCards}>
                {[0, 1, 2].map((i) => (
                  <div key={i} className={styles.phoneCard}>
                    <div className={`${styles.pcL} ${styles.pcW80}`} />
                    <div className={`${styles.pcL} ${styles.pcW55}`} />
                  </div>
                ))}
              </div>
              <div className={styles.mockPhoneHome}>
                <div className={styles.phoneHomeBar} />
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className={styles.mockBadge}>
            <div className={styles.badgeDot} />
            <div className={styles.badgeText}>
              <strong>4 slots</strong> remaining
            </div>
          </div>
          <div className={styles.mockBadge2}>
            <div className={styles.badge2Inner}>
              <span className={styles.badge2Label}>Avg. Delivery</span>
              <span className={styles.badge2Val}>14 days</span>
            </div>
          </div>
          <div className={styles.mockRing}>
            <svg viewBox="0 0 44 44" aria-hidden="true">
              <circle className={styles.ringTrack} cx="22" cy="22" r="18" />
              <circle className={styles.ringProg} cx="22" cy="22" r="18" />
              <text
                className={styles.ringLabel}
                x="22"
                y="22"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="7"
              >
                100%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
