import { PACKAGES } from "@/lib/constant";
import styles from "./styles.module.css";

export default function Packages() {
  return (
    <section className={styles.wrap} id="packages">
      <div className={styles.inner}>
        <div className={`${styles.label} reveal`}>
          <span className={styles.labelNum}>03 /</span> Pricing
        </div>
        <h2 className={`${styles.title} reveal`}>
          Two packages.
          <br />
          <em>One clear decision.</em>
        </h2>
        <div className={`${styles.promoBand} reveal`}>
          2026 Q2 Promo Pricing — Prices increase after the first 10 clients
        </div>
        <p className={`${styles.bodyP} reveal`} style={{ maxWidth: "560px" }}>
          We have opened 7 discounted slots for Q2. Once filled, these prices
          are gone. We take on a maximum of 3 new clients per month to ensure
          every brand gets our full attention.
        </p>
        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`${styles.card} ${
                pkg.featured ? styles.featured : ""
              } reveal`}
            >
              <div className={styles.pkgNum}>{pkg.number}</div>
              <h3 className={styles.pkgName}>{pkg.name}</h3>
              <p className={styles.tagline}>{pkg.tagline}</p>
              <p className={styles.was}>{pkg.wasPrice}</p>
              <p className={styles.price}>{pkg.price}</p>
              <p className={styles.save}>{pkg.savings}</p>
              <p className={styles.desc}>{pkg.description}</p>
              <p className={styles.includes}>{pkg.includesLabel}</p>
              <ul className={styles.list}>
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={pkg.ctaHref}
                className={
                  pkg.ctaVariant === "solid"
                    ? styles.ctaSolid
                    : styles.ctaOutline
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {pkg.ctaLabel}
              </a>
            </article>
          ))}
        </div>
        <p className={`${styles.transparency} reveal`}>
          <strong>Transparency:</strong> Domain, hosting, premium plugins, and
          copywriting (if you don&apos;t supply your own) are billed at direct
          cost — no markup. We&apos;ll guide you through all of it.
        </p>
      </div>
    </section>
  );
}
