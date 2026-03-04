import styles from './AboutPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';
import aboutHeroImage from '../assets/about-team-photo.png';

export function AboutPage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>About Fosco Labs</h1>
            <p className={styles.pageDescription}>
              Fosco Labs helps developers and product teams build
              production-ready software with modern engineering practices, AI
              workflows, and hands-on training.
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper}>
        <div className={styles.bodySection}>
          <div className={styles.bannerWrap}>
            <img
              src={aboutHeroImage}
              alt="Fosco Labs team-focused engineering and training visual"
              className={styles.bannerImage}
              width={1280}
              height={520}
            />
          </div>

          <div className={styles.featureRows}>
            <section className={styles.featureRow}>
              <div className={styles.featureCopy}>
                <h2>Who We Are</h2>
                <p>
                  Fosco Labs is a product and training brand powered by NAD
                  Access, the registered company behind our services. We combine
                  practical software engineering expertise with modern AI-enabled
                  delivery workflows to help teams build reliably at speed.
                </p>
              </div>
              <div className={styles.featureVisual} aria-hidden>
                <svg viewBox="0 0 340 220" className={styles.graphicSvg}>
                  <rect x="10" y="14" width="320" height="192" rx="18" fill="#EAF0F6" />
                  <circle className={styles.pulseNode} cx="85" cy="86" r="34" fill="#9900CC" opacity="0.24" />
                  <rect className={styles.slideBar} x="138" y="62" width="150" height="16" rx="8" fill="#002D5B" opacity="0.42" />
                  <rect className={styles.slideBarSoft} x="138" y="90" width="126" height="12" rx="6" fill="#002D5B" opacity="0.28" />
                  <rect x="52" y="138" width="236" height="44" rx="12" fill="#ffffff" />
                  <rect className={styles.slideBarSoft} x="68" y="154" width="124" height="12" rx="6" fill="#002D5B" opacity="0.26" />
                </svg>
              </div>
            </section>

            <section className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureCopy}>
                <h2>What We Do</h2>
                <ul>
                  <li>Professional training for individual developers and teams.</li>
                  <li>
                    Technical consultancy for architecture, implementation, and
                    product delivery.
                  </li>
                  <li>
                    Build-focused support that helps teams ship consistently, not
                    just study concepts.
                  </li>
                </ul>
              </div>
              <div className={styles.featureVisual} aria-hidden>
                <svg viewBox="0 0 340 220" className={styles.graphicSvg}>
                  <rect x="14" y="18" width="312" height="184" rx="18" fill="#EAF0F6" />
                  <rect x="38" y="40" width="120" height="72" rx="12" fill="#ffffff" />
                  <rect x="182" y="40" width="120" height="72" rx="12" fill="#ffffff" />
                  <rect x="38" y="126" width="264" height="54" rx="12" fill="#ffffff" />
                  <path className={styles.fadeStroke} d="M72 76h52M216 76h52M62 153h214" stroke="#002D5B" strokeWidth="8" strokeLinecap="round" opacity="0.32" />
                  <circle className={styles.pulseDot} cx="54" cy="153" r="8" fill="#9900CC" opacity="0.8" />
                </svg>
              </div>
            </section>

            <section className={styles.featureRow}>
              <div className={styles.featureCopy}>
                <h2>Our Approach</h2>
                <ul>
                  <li>Build-first learning with real project outcomes.</li>
                  <li>
                    Industry workflows that match how modern engineering teams
                    collaborate and deliver.
                  </li>
                  <li>
                    Production standards for maintainability, velocity, and
                    quality from day one.
                  </li>
                </ul>
              </div>
              <div className={styles.featureVisual} aria-hidden>
                <svg viewBox="0 0 340 220" className={styles.graphicSvg}>
                  <rect x="10" y="14" width="320" height="192" rx="18" fill="#EAF0F6" />
                  <path className={styles.pathPulse} d="M46 154l56-60 52 34 68-72 72 30" stroke="#9900CC" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
                  <circle className={styles.pulseDot} cx="102" cy="94" r="10" fill="#002D5B" opacity="0.55" />
                  <circle className={styles.pulseDot} cx="154" cy="128" r="10" fill="#002D5B" opacity="0.55" />
                  <circle className={styles.pulseDot} cx="222" cy="56" r="10" fill="#002D5B" opacity="0.55" />
                  <rect className={styles.slideBar} x="42" y="36" width="86" height="14" rx="7" fill="#002D5B" opacity="0.35" />
                </svg>
              </div>
            </section>

            <section className={`${styles.featureRow} ${styles.reverse}`}>
              <div className={styles.featureCopy}>
                <h2>Who We Work With</h2>
                <ul>
                  <li>Junior to senior developers building career momentum.</li>
                  <li>Startup founders and solo builders shipping MVPs.</li>
                  <li>Product and engineering teams in growth-stage companies.</li>
                  <li>Scale-ups needing focused delivery support.</li>
                </ul>
              </div>
              <div className={styles.featureVisual} aria-hidden>
                <svg viewBox="0 0 340 220" className={styles.graphicSvg}>
                  <rect x="12" y="16" width="316" height="188" rx="18" fill="#EAF0F6" />
                  <circle cx="94" cy="98" r="28" fill="#ffffff" />
                  <circle cx="170" cy="78" r="24" fill="#ffffff" />
                  <circle cx="242" cy="104" r="30" fill="#ffffff" />
                  <rect x="58" y="144" width="220" height="30" rx="15" fill="#ffffff" />
                  <circle className={styles.pulseDot} cx="94" cy="92" r="8" fill="#9900CC" opacity="0.82" />
                  <circle className={styles.pulseDot} cx="170" cy="72" r="8" fill="#9900CC" opacity="0.82" />
                  <circle className={styles.pulseDot} cx="242" cy="98" r="8" fill="#9900CC" opacity="0.82" />
                </svg>
              </div>
            </section>
          </div>

          <div className={styles.secondaryGrid}>
            <section className={styles.block}>
              <h2>Why Teams Choose Us</h2>
              <ul>
                <li>Outcome-driven plans tied to product and delivery goals.</li>
                <li>Senior engineering perspective across frontend and AI tooling.</li>
                <li>
                  Clear path from concept to deployable, production-ready
                  systems.
                </li>
                <li>
                  Pragmatic AI-assisted development without compromising quality.
                </li>
              </ul>
            </section>

            <section className={styles.block}>
              <h2>Company and Trust</h2>
              <p>
                Fosco Labs is a product name. NAD Access is the registered
                company providing services. We operate with UK-aligned
                governance and clear legal terms.
              </p>
              <p>
                See our{' '}
                <a href="/privacy-policy" aria-label="View Privacy Policy">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-of-service" aria-label="View Terms of Service">
                  Terms of Service
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Get started today!</h2>
            <p className={styles.ctaDescription}>
              No degree, no tech background, just direction? Master the tools
              and frameworks used to build high-performance digital products.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="/#categories" className={buttonStyles.primary}>
              Explore Training Categories
            </a>
            <a href="/#consultancy" className={buttonStyles.secondary}>
              Request Consultancy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
