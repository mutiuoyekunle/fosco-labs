import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ConsultancySection.module.css';
import buttonStyles from './Button/Button.module.css';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { sectionVariants } from '../utils/animations';
import { isEmailValid, isPhoneValid, openMailto } from '../utils/formEmail';

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="#22C55E" strokeWidth="2.5" />
      <path
        d="M8 12.3L10.8 15L16.4 9.4"
        stroke="#22C55E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OFFERINGS = [
  'AI Integration',
  'Team Training',
  'Code Reviews & Audits',
  'Frontend architecture and code organization',
  'MVP Development',
  'Firebase / Supabase implementation',
] as const;

const SERVICE_OPTIONS = [
  'AI Integration',
  'Team Training',
  'Code Reviews & Audits',
  'Frontend Architecture',
  'MVP Development',
  'Firebase / Supabase',
];

export function ConsultancySection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    countryCode: '+44',
    serviceType: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!isEmailValid(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.mobile.trim()) {
      nextErrors.mobile = 'Mobile number is required.';
    } else if (!isPhoneValid(formData.mobile)) {
      nextErrors.mobile = 'Enter a valid mobile number.';
    }
    if (!formData.serviceType) nextErrors.serviceType = 'Select a service type.';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    openMailto({
      subject: `Consultancy enquiry: ${formData.serviceType}`,
      lines: [
        'Consultancy enquiry',
        '',
        `First name: ${formData.firstName.trim()}`,
        `Last name: ${formData.lastName.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Phone: ${formData.countryCode} ${formData.mobile.trim()}`,
        `Service type: ${formData.serviceType}`,
      ],
    });
  };

  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.wrapper}
      id="consultancy"
      aria-labelledby="consultancy-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px 0px -48px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.section}>
        <div className={styles.content}>
          <header className={styles.header}>
            <h2 id="consultancy-heading" className={styles.title}>
              Engineering Support & Technical Consultancy
            </h2>
            <p className={styles.subtitle}>
              Partner with us to accelerate your product development. We work
              with startups and scale-ups to deliver production-ready solutions.
            </p>
          </header>

          <div className={styles.offerings}>
            <h3 className={styles.offeringsTitle}>What We Offer</h3>
            <ul className={styles.list}>
              {OFFERINGS.map((item) => (
                <li key={item} className={styles.listItem}>
                  <CheckIcon className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.formGrid}>
            <label className={styles.field}>
              <span className={styles.label}>First Name</span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.firstName ? styles.inputError : ''
                }`}
                autoComplete="given-name"
                aria-invalid={Boolean(errors.firstName)}
              />
              {errors.firstName && (
                <span className={styles.errorText}>{errors.firstName}</span>
              )}
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Last Name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.lastName ? styles.inputError : ''
                }`}
                autoComplete="family-name"
                aria-invalid={Boolean(errors.lastName)}
              />
              {errors.lastName && (
                <span className={styles.errorText}>{errors.lastName}</span>
              )}
            </label>
          </div>

          <div className={styles.formGrid}>
            <label className={styles.field}>
              <span className={styles.label}>Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ''
                }`}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Mobile Number</span>
              <div className={styles.mobileRow}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className={styles.countryCodeSelect}
                  aria-label="Country code"
                >
                  <option value="+44">+44</option>
                  <option value="+234">+234</option>
                  <option value="+233">+233</option>
                  <option value="+254">+254</option>
                  <option value="+27">+27</option>
                  <option value="+255">+255</option>
                  <option value="+256">+256</option>
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33</option>
                  <option value="+971">+971</option>
                  <option value="+20">+20</option>
                </select>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`${styles.input} ${
                    errors.mobile ? styles.inputError : ''
                  }`}
                  autoComplete="tel-national"
                  aria-invalid={Boolean(errors.mobile)}
                />
              </div>
              {errors.mobile && (
                <span className={styles.errorText}>{errors.mobile}</span>
              )}
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Service Type</span>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`${styles.select} ${
                errors.serviceType ? styles.inputError : ''
              }`}
              aria-label="Service Type"
              aria-invalid={Boolean(errors.serviceType)}
            >
              <option value="">Select an offering</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <span className={styles.errorText}>{errors.serviceType}</span>
            )}
          </label>

          <motion.button
            type="submit"
            className={buttonStyles.submit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Request Consultancy
          </motion.button>
          <p className={styles.submitHint}>This opens your email app with the enquiry details.</p>
        </form>
      </div>
    </motion.section>
  );
}
