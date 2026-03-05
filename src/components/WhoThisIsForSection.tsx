import { motion } from 'framer-motion';
import styles from './WhoThisIsForSection.module.css';
import { Card } from './Card';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { sectionVariants, staggerContainerVariants } from '../utils/animations';
import juniorDevelopersImage from '../assets/who-this-is-for/junior-developers.jpg';
import midLevelEngineersImage from '../assets/who-this-is-for/mid-level-engineers.jpg';
import seniorDevelopersImage from '../assets/who-this-is-for/senior-developers.jpg';
import productTeamsImage from '../assets/who-this-is-for/product-teams.jpg';

const AUDIENCES = [
  {
    id: 'junior',
    title: 'Junior Developers',
    description:
      'Build solid foundations in modern development practices.',
    image: juniorDevelopersImage,
  },
  {
    id: 'mid',
    title: 'Mid-level Engineers',
    description:
      'Level up with advanced patterns and architectural thinking.',
    image: midLevelEngineersImage,
  },
  {
    id: 'senior',
    title: 'Senior Developers',
    description: 'Stay current with AI and cutting-edge technologies.',
    image: seniorDevelopersImage,
  },
  {
    id: 'teams',
    title: 'Product Teams',
    description:
      'Upskill your entire team with consistent, professional training.',
    image: productTeamsImage,
  },
] as const;

export function WhoThisIsForSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.wrapper}
      id="who-this-is-for"
      aria-labelledby="who-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px 0px -48px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.section}>
        <header className={styles.header}>
          <h2 id="who-heading" className={styles.title}>
            Who This Is For
          </h2>
          <p className={styles.subtitle}>
            Whether you're starting out or leading a team, we have training that
            meets you where you are.
          </p>
        </header>
        <motion.div
          className={styles.grid}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={reduceMotion}
        >
          {AUDIENCES.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              className={styles.cardInGrid}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
