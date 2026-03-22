import { useState } from 'react';
import styles from './ContactPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  enquiryTrack: '',
  countryCode: '+44',
  phone: '',
  company: '',
  projectServiceType: '',
  learningInterest: '',
  currentLevel: '',
  budgetRange: '',
  timeline: '',
  projectGoal: '',
};

export function ContactPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const isLearningTrack =
    formData.enquiryTrack === 'learning' || formData.enquiryTrack === 'both';
  const isConsultancyTrack =
    formData.enquiryTrack === 'consultancy' || formData.enquiryTrack === 'both';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire this to backend email/CRM.
  };

  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.pageTitle}>Contact Fosco Labs</h1>
            <p className={styles.pageDescription}>
              Tell us what you're building, what support you need, and your
              timeline. We'll reply with the best next step for training,
              consultancy, or product delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper}>
        <div className={styles.bodySection}>
          <div className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Send us an enquiry</h2>
            <p className={styles.panelDescription}>
              Share a few details and we'll respond within one business day.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label className={styles.field}>
                <span className={styles.label}>I want support for</span>
                <select
                  name="enquiryTrack"
                  value={formData.enquiryTrack}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select one</option>
                  <option value="learning">Learning & Upskilling</option>
                  <option value="consultancy">Project Consultancy</option>
                  <option value="both">Both Learning and Consultancy</option>
                </select>
              </label>

              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span className={styles.label}>Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={styles.input}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Work Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={styles.input}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>Phone / WhatsApp (optional)</span>
                <div className={styles.phoneRow}>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className={styles.select}
                    aria-label="Country code"
                  >
                    <option value="+44">+44</option>
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+49">+49</option>
                    <option value="+33">+33</option>
                    <option value="+971">+971</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    className={styles.input}
                    autoComplete="tel-national"
                  />
                </div>
              </label>

              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span className={styles.label}>Company (optional)</span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={styles.input}
                    autoComplete="organization"
                  />
                </label>

                {isConsultancyTrack && (
                  <label className={styles.field}>
                    <span className={styles.label}>Project Service Type</span>
                    <select
                      name="projectServiceType"
                      value={formData.projectServiceType}
                      onChange={handleChange}
                      className={styles.select}
                      required={isConsultancyTrack}
                    >
                      <option value="">Select a service</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="frontend-architecture">
                        Frontend Architecture
                      </option>
                      <option value="mvp-development">MVP Development</option>
                      <option value="team-training">Team Training</option>
                      <option value="code-review-audit">
                        Code Review & Audit
                      </option>
                    </select>
                  </label>
                )}

                {isLearningTrack && (
                  <label className={styles.field}>
                    <span className={styles.label}>Learning Interest</span>
                    <select
                      name="learningInterest"
                      value={formData.learningInterest}
                      onChange={handleChange}
                      className={styles.select}
                      required={isLearningTrack}
                    >
                      <option value="">Select an interest</option>
                      <option value="ai-engineering">AI Engineering</option>
                      <option value="frontend-js-ts">
                        Modern JavaScript & Frontend
                      </option>
                      <option value="ui-engineering">UI Engineering</option>
                      <option value="ai-assisted-coding">
                        AI-Assisted Coding
                      </option>
                      <option value="firebase-supabase">
                        Firebase & Supabase
                      </option>
                    </select>
                  </label>
                )}
              </div>

              {(isLearningTrack || isConsultancyTrack) && (
                <div className={styles.formGrid}>
                  {isLearningTrack && (
                    <label className={styles.field}>
                      <span className={styles.label}>Current Skill Level</span>
                      <select
                        name="currentLevel"
                        value={formData.currentLevel}
                        onChange={handleChange}
                        className={styles.select}
                        required={isLearningTrack}
                      >
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </label>
                  )}

                  {isConsultancyTrack && (
                    <label className={styles.field}>
                      <span className={styles.label}>Budget Range (optional)</span>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-2k">Under £2,000</option>
                        <option value="2k-5k">£2,000 - £5,000</option>
                        <option value="5k-10k">£5,000 - £10,000</option>
                        <option value="10k-plus">£10,000+</option>
                      </select>
                    </label>
                  )}
                </div>
              )}

              {isConsultancyTrack && (
                <label className={styles.field}>
                  <span className={styles.label}>Timeline</span>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={styles.select}
                    required={isConsultancyTrack}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-plus-months">3+ months</option>
                  </select>
                </label>
              )}

              <label className={styles.field}>
                <span className={styles.label}>Project Goal</span>
                <textarea
                  name="projectGoal"
                  value={formData.projectGoal}
                  onChange={handleChange}
                  placeholder="Tell us what you want to build or improve."
                  className={styles.textarea}
                  required
                />
              </label>

              <div className={styles.submitRow}>
                <button type="submit" className={buttonStyles.primary}>
                  Send Enquiry
                </button>
                <p className={styles.helperText}>
                  By submitting, you agree that we can contact you about your
                  enquiry.
                </p>
              </div>
            </form>
          </div>

          <aside className={styles.infoPanel}>
            <section className={styles.infoCard}>
              <h3>Direct contact details</h3>
              <div className={styles.contactList}>
                <span>Email: hello@foscolabs.co.uk</span>
                <span>Legal/Privacy: legal@foscolabs.co.uk</span>
                <span>Phone: 07359939606</span>
                <span>Hours: Mon-Fri, 9:00-18:00 (UK time)</span>
              </div>
            </section>

            <section className={styles.infoCard}>
              <h3>What happens next</h3>
              <ul>
                <li>We review your message within 1 business day.</li>
                <li>If needed, we schedule a short discovery call.</li>
                <li>You receive recommended next steps and scope options.</li>
              </ul>
            </section>
          </aside>
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
