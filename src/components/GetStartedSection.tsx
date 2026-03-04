import { motion } from 'framer-motion';
import styles from './GetStartedSection.module.css';
import buttonStyles from './Button/Button.module.css';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { sectionVariants, quickTransition } from '../utils/animations';

export function GetStartedSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.wrapper}
      aria-labelledby="get-started-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px 0px -48px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 id="get-started-heading" className={styles.title}>
            Get started today!
          </h2>
          <p className={styles.subtitle}>
            No degree, no tech background, just direction? Master the tools and
            frameworks used to build high-performance digital products.
          </p>
          <div className={styles.actions}>
            <motion.a
              href="/#categories"
              className={buttonStyles.primary}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={quickTransition}
            >
              Explore Training Categories
            </motion.a>
            <motion.a
              href="/#consultancy"
              className={buttonStyles.secondary}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={quickTransition}
            >
              Request Consultancy
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
