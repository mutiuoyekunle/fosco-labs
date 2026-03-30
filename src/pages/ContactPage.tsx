import { useState } from 'react';
import styles from './ContactPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';
import {
  isEmailValid,
  isPhoneValid,
  submitEnquiry,
} from '../utils/formEmail';

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.enquiryTrack) {
      nextErrors.enquiryTrack = 'Select what you need support for.';
    }
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Work email is required.';
    } else if (!isEmailValid(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (formData.phone.trim() && !isPhoneValid(formData.phone)) {
      nextErrors.phone = 'Enter a valid mobile number.';
    }
    if (isConsultancyTrack && !formData.projectServiceType) {
      nextErrors.projectServiceType = 'Select a project service type.';
    }
    if (isLearningTrack && !formData.learningInterest) {
      nextErrors.learningInterest = 'Select a learning interest.';
    }
    if (isLearningTrack && !formData.currentLevel) {
      nextErrors.currentLevel = 'Select your current skill level.';
    }
    if (isConsultancyTrack && !formData.timeline) {
      nextErrors.timeline = 'Select a timeline.';
    }
    if (!formData.projectGoal.trim()) {
      nextErrors.projectGoal = 'Tell us what you want to build or improve.';
    }

    setErrors(nextErrors);
    setSubmitStatus({ type: 'idle', message: '' });

    if (Object.keys(nextErrors).length > 0) return;

    const enquiryLabel =
      formData.enquiryTrack === 'both'
        ? 'Learning and Consultancy'
        : formData.enquiryTrack === 'learning'
        ? 'Learning'
        : 'Consultancy';

    setIsSubmitting(true);

    try {
      await submitEnquiry({
        formType: 'contact',
        replyTo: formData.email.trim(),
        subject: `Website enquiry: ${enquiryLabel}`,
        fields: [
          { label: 'Support needed', value: enquiryLabel },
          { label: 'Full name', value: formData.fullName.trim() },
          { label: 'Work email', value: formData.email.trim() },
          {
            label: 'Phone',
            value: formData.phone.trim()
              ? `${formData.countryCode} ${formData.phone.trim()}`
              : 'Not provided',
          },
          { label: 'Company', value: formData.company.trim() || 'Not provided' },
          {
            label: 'Project service type',
            value: formData.projectServiceType || 'Not provided',
          },
          {
            label: 'Learning interest',
            value: formData.learningInterest || 'Not provided',
          },
          {
            label: 'Current skill level',
            value: formData.currentLevel || 'Not provided',
          },
          { label: 'Budget range', value: formData.budgetRange || 'Not provided' },
          { label: 'Timeline', value: formData.timeline || 'Not provided' },
          { label: 'Goals', value: formData.projectGoal.trim() },
        ],
      });

      setFormData(INITIAL_FORM);
      setSubmitStatus({
        type: 'success',
        message: 'Your enquiry has been sent. We will reply within one business day.',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Unable to send your enquiry right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  className={`${styles.select} ${
                    errors.enquiryTrack ? styles.inputError : ''
                  }`}
                  required
                  aria-invalid={Boolean(errors.enquiryTrack)}
                >
                  <option value="">Select one</option>
                  <option value="learning">Learning & Upskilling</option>
                  <option value="consultancy">Project Consultancy</option>
                  <option value="both">Both Learning and Consultancy</option>
                </select>
                {errors.enquiryTrack && (
                  <span className={styles.errorText}>{errors.enquiryTrack}</span>
                )}
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
                    className={`${styles.input} ${
                      errors.fullName ? styles.inputError : ''
                    }`}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && (
                    <span className={styles.errorText}>{errors.fullName}</span>
                  )}
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Work Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`${styles.input} ${
                      errors.email ? styles.inputError : ''
                    }`}
                    autoComplete="email"
                    required
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className={styles.errorText}>{errors.email}</span>
                  )}
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
                    className={`${styles.input} ${
                      errors.phone ? styles.inputError : ''
                    }`}
                    autoComplete="tel-national"
                    aria-invalid={Boolean(errors.phone)}
                  />
                </div>
                {errors.phone && (
                  <span className={styles.errorText}>{errors.phone}</span>
                )}
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
                      className={`${styles.select} ${
                        errors.projectServiceType ? styles.inputError : ''
                      }`}
                      required={isConsultancyTrack}
                      aria-invalid={Boolean(errors.projectServiceType)}
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
                    {errors.projectServiceType && (
                      <span className={styles.errorText}>
                        {errors.projectServiceType}
                      </span>
                    )}
                  </label>
                )}

                {isLearningTrack && (
                  <label className={styles.field}>
                    <span className={styles.label}>Learning Interest</span>
                    <select
                      name="learningInterest"
                      value={formData.learningInterest}
                      onChange={handleChange}
                      className={`${styles.select} ${
                        errors.learningInterest ? styles.inputError : ''
                      }`}
                      required={isLearningTrack}
                      aria-invalid={Boolean(errors.learningInterest)}
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
                    {errors.learningInterest && (
                      <span className={styles.errorText}>
                        {errors.learningInterest}
                      </span>
                    )}
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
                        className={`${styles.select} ${
                          errors.currentLevel ? styles.inputError : ''
                        }`}
                        required={isLearningTrack}
                        aria-invalid={Boolean(errors.currentLevel)}
                      >
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                      {errors.currentLevel && (
                        <span className={styles.errorText}>{errors.currentLevel}</span>
                      )}
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
                    className={`${styles.select} ${
                      errors.timeline ? styles.inputError : ''
                    }`}
                    required={isConsultancyTrack}
                    aria-invalid={Boolean(errors.timeline)}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-plus-months">3+ months</option>
                  </select>
                  {errors.timeline && (
                    <span className={styles.errorText}>{errors.timeline}</span>
                  )}
                </label>
              )}

              <label className={styles.field}>
                <span className={styles.label}>Project Goal</span>
                <textarea
                  name="projectGoal"
                  value={formData.projectGoal}
                  onChange={handleChange}
                  placeholder="Tell us what you want to build or improve."
                  className={`${styles.textarea} ${
                    errors.projectGoal ? styles.inputError : ''
                  }`}
                  required
                  aria-invalid={Boolean(errors.projectGoal)}
                />
                {errors.projectGoal && (
                  <span className={styles.errorText}>{errors.projectGoal}</span>
                )}
              </label>

              <div className={styles.submitRow}>
                <button
                  type="submit"
                  className={buttonStyles.primary}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                <p className={styles.helperText}>
                  Your message will be sent directly to our team inbox.
                </p>
              </div>
              {submitStatus.type !== 'idle' && (
                <p
                  className={
                    submitStatus.type === 'success'
                      ? styles.successText
                      : styles.submitError
                  }
                  role="status"
                >
                  {submitStatus.message}
                </p>
              )}
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
