import { motion } from 'framer-motion';
import styles from './Card.module.css';
import buttonStyles from '../Button/Button.module.css';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { staggerItemVariants, quickTransition } from '../../utils/animations';
import arrowRightIconUrl from '../../assets/arrow-right-02.svg';

export type CardProps = {
  title: string;
  description: string;
  image: string;
  /** When provided, card shows a "Learn More" link; when omitted, card is display-only with no link */
  href?: string;
  /** Optional: set to true when card is inside a list (e.g. Tutorial Categories) for role="listitem" */
  asListItem?: boolean;
  /** Optional: extra class for the card root (e.g. to make it fill a grid cell) */
  className?: string;
};

export function Card({
  title,
  description,
  image,
  href,
  asListItem = false,
  className,
}: CardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className ? `${styles.card} ${className}` : styles.card}
      role={asListItem ? 'listitem' : undefined}
      variants={staggerItemVariants}
      custom={reduceMotion}
      whileHover={{ y: -4 }}
      transition={quickTransition}
    >
      <div className={styles.cardImageWrap}>
        <div className={styles.cardImageInner}>
          <img
            src={image}
            alt=""
            className={styles.cardImage}
            width={304}
            height={221}
          />
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {href != null && (
          <motion.a
            href={href}
            className={`${buttonStyles.tertiary} ${styles.learnMore}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={quickTransition}
            aria-label="Learn more"
          >
            <span className={styles.learnMoreLabel}>Learn More</span>
            <img
              src={arrowRightIconUrl}
              alt=""
              width={24}
              height={24}
              className={styles.arrow}
              aria-hidden
            />
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}
