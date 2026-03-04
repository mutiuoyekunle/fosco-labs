import styles from './ProgrammesPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';

const PROGRAMMES = [
  {
    id: 'ai-foundations',
    title: 'AI Engineering Foundations',
    level: 'Beginner / Junior',
    description:
      'Build practical AI product skills with guided, production-style projects and mentorship.',
    duration: '8 weeks',
    startDate: 'April 14, 2026',
    schedule: 'Tue & Thu, 18:30-20:30 (UK)',
    price: '£799',
    installment: 'or 3 x £279',
    recommended: true,
  },
  {
    id: 'frontend-accelerator',
    title: 'Modern Frontend Accelerator',
    level: 'Intermediate',
    description:
      'Upgrade your React, TypeScript, and architecture decisions for scalable, team-ready delivery.',
    duration: '6 weeks',
    startDate: 'April 18, 2026',
    schedule: 'Sat, 10:00-13:00 (UK)',
    price: '£649',
    installment: 'or 2 x £349',
    recommended: false,
  },
  {
    id: 'ai-assisted-delivery',
    title: 'AI-Assisted Delivery for Product Teams',
    level: 'Advanced / Team',
    description:
      'Use AI tooling safely in delivery workflows to increase velocity without sacrificing engineering quality.',
    duration: '4 weeks',
    startDate: 'May 6, 2026',
    schedule: 'Wed, 17:00-19:00 (UK)',
    price: '£999',
    installment: 'or 4 x £269',
    recommended: false,
  },
] as const;

export function ProgrammesPage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>Programmes & Pricing</h1>
            <p className={styles.pageDescription}>
              Choose a training track that matches your current level, goals,
              and delivery timeline. We offer transparent pricing, installment
              plans, and placement-based discounts for accelerated tracks.
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper}>
        <div className={styles.bodySection}>
          <div className={styles.programmesGrid}>
            {PROGRAMMES.map((programme) => (
              <article
                key={programme.id}
                id={programme.id}
                className={
                  programme.recommended
                    ? `${styles.programmeCard} ${styles.programmeCardRecommended}`
                    : styles.programmeCard
                }
              >
                <div className={styles.badgeRow}>
                  <span className={styles.level}>{programme.level}</span>
                  {programme.recommended && (
                    <span className={styles.recommended}>Recommended</span>
                  )}
                </div>

                <h2 className={styles.programmeTitle}>{programme.title}</h2>
                <p className={styles.programmeDescription}>
                  {programme.description}
                </p>

                <ul className={styles.metaList}>
                  <li>
                    <strong>Duration:</strong> {programme.duration}
                  </li>
                  <li>
                    <strong>Start Date:</strong> {programme.startDate}
                  </li>
                  <li>
                    <strong>Schedule:</strong> {programme.schedule}
                  </li>
                </ul>

                <div className={styles.priceRow}>
                  <p className={styles.price}>{programme.price}</p>
                  <p className={styles.installment}>{programme.installment}</p>
                  <a
                    href="/contact"
                    className={`${buttonStyles.secondary} ${styles.detailsAction}`}
                  >
                    Contact for details
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.infoGrid}>
            <section className={styles.infoCard}>
              <h2>Pricing Structure</h2>
              <ul>
                <li>Base fees are listed per programme and cohort period.</li>
                <li>Installment plans are available on eligible tracks.</li>
                <li>Early-bird offers may apply to selected cohorts.</li>
                <li>
                  Skills-based placement discounts are available for accelerated
                  tracks (up to 15%).
                </li>
                <li>Discounts are not stackable unless stated otherwise.</li>
              </ul>
            </section>

            <section className={styles.infoCard}>
              <h2>How Pricing Works</h2>
              <ul>
                <li>Step 1: Submit your interest for a programme.</li>
                <li>Step 2: Join a short assessment/discovery call.</li>
                <li>
                  Step 3: Confirm the best-fit track, schedule, and final fee.
                </li>
              </ul>
              <p>
                Need team pricing or a custom plan? Use the contact page for a
                detailed quote.
              </p>
            </section>
          </div>

          <div className={styles.faqGrid}>
            <article className={styles.faqItem}>
              <h3>Can I pay in installments?</h3>
              <p>
                Yes. Installment options are shown on each track and finalized
                at enrollment.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>Do you offer team pricing?</h3>
              <p>
                Yes. Teams and company-sponsored cohorts can request a custom
                pricing package.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>How does placement discount work?</h3>
              <p>
                We review your current level and route you into the best-fit
                track. Some accelerated placements get reduced fees.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need help choosing a track?</h2>
            <p className={styles.ctaDescription}>
              Tell us your experience level and target outcome. We'll recommend
              the most suitable programme and payment structure.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="/contact" className={buttonStyles.primary}>
              Contact Us
            </a>
            <a href="/#categories" className={buttonStyles.secondary}>
              Explore Training Categories
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
