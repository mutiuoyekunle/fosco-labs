import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import buttonStyles from './Button/Button.module.css';
import {
  heroContentVariants,
  heroItemVariants,
  quickTransition,
} from '../utils/animations';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.wrapper} aria-labelledby="hero-heading">
      <div className={styles.section}>
        <motion.div
          className={styles.content}
          variants={heroContentVariants}
          initial="hidden"
          animate="visible"
          custom={reduceMotion}
        >
          <motion.h1
            id="hero-heading"
            className={styles.heading}
            variants={heroItemVariants}
            custom={reduceMotion}
          >
            Build Real Software. Become Industry-Ready. Deliver Faster with AI.
          </motion.h1>
          <motion.p
            className={styles.paragraph}
            variants={heroItemVariants}
            custom={reduceMotion}
          >
            Practical training designed to develop production-level skills used
            by modern engineering teams. Learn technologies and workflows
            aligned with roles that command £35k to £130k+ across today's
            software market.
          </motion.p>
          <motion.div
            className={styles.actions}
            variants={heroItemVariants}
            custom={reduceMotion}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
