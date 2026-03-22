import styles from './LegalPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';

const LAST_UPDATED = 'March 4, 2026';

export function PrivacyPolicyPage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 id="privacy-policy-title" className={styles.pageTitle}>
              Privacy Policy
            </h1>
            <p className={styles.pageDescription}>
              Effective date: {LAST_UPDATED}. This policy is for Fosco Labs
              Consulting and applies to our website and related training and
              consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper} aria-labelledby="privacy-policy-title">
        <div className={styles.bodySection}>
          <div className={styles.content}>
          <section className={styles.block}>
            <h2>1. Who we are</h2>
            <p>
              Fosco Labs Consulting ("we", "us", "our") provides software
              engineering training, consultancy, and digital services. For data
              protection purposes, we act as a data controller for personal data
              collected through this website.
            </p>
          </section>

          <section className={styles.block}>
            <h2>2. Contact details</h2>
            <p>
              You can contact us about privacy matters at{' '}
              <strong>privacy@foscolabs.co.uk</strong> or{' '}
              <strong>07359939606</strong>. This is a placeholder contact and
              can be updated later.
            </p>
          </section>

          <section className={styles.block}>
            <h2>3. Personal data we collect</h2>
            <p>We may collect the following categories of data:</p>
            <ul>
              <li>
                Identity and contact data (name, email, phone number, company).
              </li>
              <li>
                Enquiry and service data (training interests, service requests,
                goals, and project details).
              </li>
              <li>
                Technical data (IP address, browser type, device details, and
                usage information).
              </li>
              <li>
                Communication records (messages you send us by forms, email, or
                other channels).
              </li>
            </ul>
          </section>

          <section className={styles.block}>
            <h2>4. How we collect data</h2>
            <ul>
              <li>Directly from you when you submit forms or contact us.</li>
              <li>
                Automatically via website technologies such as cookies and
                analytics tools.
              </li>
              <li>
                From third-party tools we use for communication, hosting, and
                service delivery.
              </li>
            </ul>
          </section>

          <section className={styles.block}>
            <h2>5. Why we use your data and lawful bases (UK GDPR)</h2>
            <p>We process personal data under one or more lawful bases:</p>
            <ul>
              <li>
                <strong>Contract:</strong> to respond to requests and deliver
                training or consultancy services.
              </li>
              <li>
                <strong>Legitimate interests:</strong> to operate, improve, and
                secure our website and services.
              </li>
              <li>
                <strong>Consent:</strong> where required, such as optional
                marketing communications.
              </li>
              <li>
                <strong>Legal obligation:</strong> where processing is needed to
                comply with applicable law.
              </li>
            </ul>
          </section>

          <section className={styles.block}>
            <h2>6. Cookies and analytics</h2>
            <p>
              We may use cookies and similar technologies to understand website
              usage, maintain performance, and improve user experience.
              Non-essential cookies should only be used with your consent where
              required by law.
            </p>
          </section>

          <section className={styles.block}>
            <h2>7. Sharing your data</h2>
            <p>We may share data with trusted service providers, including:</p>
            <ul>
              <li>Website hosting and infrastructure providers.</li>
              <li>Email, communication, and CRM platforms.</li>
              <li>Analytics and security service providers.</li>
            </ul>
            <p>
              We require service providers to protect personal data and only use
              it for agreed purposes.
            </p>
          </section>

          <section className={styles.block}>
            <h2>8. International transfers</h2>
            <p>
              If data is transferred outside the UK, we use appropriate
              safeguards such as adequacy regulations, standard contractual
              clauses, or equivalent legal mechanisms.
            </p>
          </section>

          <section className={styles.block}>
            <h2>9. Data retention</h2>
            <p>
              We keep personal data only for as long as necessary to fulfil the
              purposes described in this policy, including legal, regulatory,
              and reporting requirements.
            </p>
          </section>

          <section className={styles.block}>
            <h2>10. Data security</h2>
            <p>
              We implement reasonable technical and organisational safeguards to
              protect personal data. No online system is completely secure, but
              we work to reduce risk and respond quickly to incidents.
            </p>
          </section>

          <section className={styles.block}>
            <h2>11. Your rights (UK GDPR)</h2>
            <p>You may have the right to:</p>
            <ul>
              <li>Access your personal data.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request erasure of your data in certain cases.</li>
              <li>Object to or restrict specific processing.</li>
              <li>Request portability of data you provided to us.</li>
              <li>Withdraw consent where processing relies on consent.</li>
            </ul>
            <p>
              You can also complain to the UK Information Commissioner's Office
              (ICO) if you believe your rights have been infringed.
            </p>
          </section>

          <section className={styles.block}>
            <h2>12. Children's data</h2>
            <p>
              Our services are not directed to children under 13, and we do not
              knowingly collect personal data from children without appropriate
              parental or guardian consent.
            </p>
          </section>

          <section className={styles.block}>
            <h2>13. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Material changes will
              be posted on this page with an updated effective date.
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
