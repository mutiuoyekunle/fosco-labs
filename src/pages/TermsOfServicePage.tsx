import styles from './LegalPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';

const LAST_UPDATED = 'March 4, 2026';

export function TermsOfServicePage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 id="terms-title" className={styles.pageTitle}>
              Terms of Service
            </h1>
            <p className={styles.pageDescription}>
              Effective date: {LAST_UPDATED}. These terms govern your use of
              the Fosco Labs Consulting website and related services.
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper} aria-labelledby="terms-title">
        <div className={styles.bodySection}>
          <div className={styles.content}>
          <section className={styles.block}>
            <h2>1. Acceptance of terms</h2>
            <p>
              By accessing or using this website, you agree to these Terms of
              Service. If you do not agree, you should not use the site or our
              related services.
            </p>
          </section>

          <section className={styles.block}>
            <h2>2. About our services</h2>
            <p>
              Fosco Labs Consulting provides software engineering training,
              educational resources, templates, and consultancy services. Any
              project-specific deliverables may be governed by a separate
              written agreement.
            </p>
          </section>

          <section className={styles.block}>
            <h2>3. Use of the website</h2>
            <p>You agree not to misuse the website. This includes not:</p>
            <ul>
              <li>Attempting unauthorized access to systems or accounts.</li>
              <li>Introducing malicious code or disrupting service operation.</li>
              <li>Copying or scraping content in violation of applicable law.</li>
              <li>
                Using the site in ways that infringe the rights of others.
              </li>
            </ul>
          </section>

          <section className={styles.block}>
            <h2>4. Intellectual property</h2>
            <p>
              Unless stated otherwise, website content, branding, training
              materials, templates, and related assets are owned by or licensed
              to Fosco Labs Consulting and are protected by applicable
              intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative
              works from our materials except as permitted by law or explicit
              written agreement.
            </p>
          </section>

          <section className={styles.block}>
            <h2>5. Client and user submissions</h2>
            <p>
              If you submit information (for example via forms), you confirm it
              is accurate and does not violate third-party rights. You grant us
              the right to use submitted information as needed to respond to
              enquiries and deliver services.
            </p>
          </section>

          <section className={styles.block}>
            <h2>6. Fees, proposals, and contracts</h2>
            <p>
              Public website content does not constitute a binding offer. Final
              pricing, scope, timelines, and deliverables are agreed in writing
              (for example in a proposal, statement of work, or service
              contract).
            </p>
          </section>

          <section className={styles.block}>
            <h2>7. Third-party links and services</h2>
            <p>
              Our website may contain links to third-party services. We are not
              responsible for third-party content, terms, or privacy practices.
              Your use of third-party sites is at your own risk.
            </p>
          </section>

          <section className={styles.block}>
            <h2>8. Disclaimers</h2>
            <p>
              The website and its content are provided on an "as is" and "as
              available" basis. To the extent permitted by law, we disclaim
              warranties of any kind, including implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section className={styles.block}>
            <h2>9. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Fosco Labs Consulting is
              not liable for indirect, incidental, special, consequential, or
              punitive damages, or loss of profits, data, goodwill, or business
              opportunities arising from use of this website or services.
            </p>
            <p>
              Nothing in these terms excludes liability that cannot legally be
              excluded under applicable law.
            </p>
          </section>

          <section className={styles.block}>
            <h2>10. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless Fosco Labs Consulting
              from claims, losses, liabilities, and expenses arising from your
              misuse of the website, your breach of these terms, or your
              violation of applicable law.
            </p>
          </section>

          <section className={styles.block}>
            <h2>11. Suspension and termination</h2>
            <p>
              We may suspend or restrict access to the website at any time for
              maintenance, security, legal reasons, or misuse of services.
            </p>
          </section>

          <section className={styles.block}>
            <h2>12. Governing law and jurisdiction</h2>
            <p>
              These terms are governed by the laws of England and Wales. Courts
              of England and Wales will have exclusive jurisdiction, unless
              mandatory law provides otherwise.
            </p>
          </section>

          <section className={styles.block}>
            <h2>13. Contact</h2>
            <p>
              For terms-related enquiries, contact{' '}
              <strong>legal@foscolabs.co.uk</strong> or{' '}
              <strong>+44 20 7946 0999</strong>. This is a placeholder contact
              and can be updated later.
            </p>
          </section>

          <section className={styles.block}>
            <h2>14. Updates to these terms</h2>
            <p>
              We may update these terms from time to time. Updated terms will be
              posted on this page with a revised effective date.
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
              Master the tools and frameworks used to build high-performance
              digital products.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="/#categories" className={buttonStyles.primary}>
              Explore Tutorial Categories
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
