import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TutorialCategoriesSection.module.css';
import { RequestTutorialModal } from './RequestTutorialModal';
import { Card } from './Card';
import buttonStyles from './Button/Button.module.css';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  sectionVariants,
  staggerContainerVariants,
  quickTransition,
} from '../utils/animations';

const CATEGORIES = [
  {
    id: 'ai-engineering',
    title: 'AI Engineering for Developers',
    description:
      'Build production-ready AI applications. Learn LLMs, prompt engineering, and AI integration patterns.',
    image:
      'https://www.figma.com/api/mcp/asset/ff925791-4ddc-41d7-bad1-cb48d04c2703',
    href: '#ai-engineering',
  },
  {
    id: 'modern-js',
    title: 'Modern JavaScript & Frontend Engineering',
    description:
      'Master React, TypeScript, and modern frontend architecture for scalable applications.',
    image:
      'https://www.figma.com/api/mcp/asset/612a2031-82ae-474f-b522-e75ae9da95fb',
    href: '#modern-js',
  },
  {
    id: 'firebase-supabase',
    title: 'Firebase & Supabase for Modern Applications',
    description:
      'Build full-stack apps with Firebase and Supabase. Authentication, databases, and real-time features.',
    image:
      'https://www.figma.com/api/mcp/asset/2f968847-ce47-455c-be7f-85782f20efad',
    href: '#firebase-supabase',
  },
  {
    id: 'ai-assisted-coding',
    title: 'AI-Assisted Coding & Developer Productivity',
    description:
      'Leverage AI tools like Copilot and ChatGPT to accelerate your development workflow.',
    image:
      'https://www.figma.com/api/mcp/asset/4617a5dd-b84e-4022-9d37-f473f240d8bb',
    href: '#ai-assisted-coding',
  },
  {
    id: 'ui-engineering',
    title: 'UI Engineering & Design Systems',
    description:
      'Create consistent, accessible interfaces with design systems and component libraries.',
    image:
      'https://www.figma.com/api/mcp/asset/660c6a54-35d4-4d0a-9b69-5d4cc47b4de9',
    href: '#ui-engineering',
  },
] as const;

export function TutorialCategoriesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.wrapper}
      id="categories"
      aria-labelledby="categories-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-48px 0px -48px 0px' }}
      custom={reduceMotion}
    >
      <div className={styles.section}>
        <header className={styles.header}>
          <h2 id="categories-heading" className={styles.title}>
            Training Categories
          </h2>
          <p className={styles.subtitle}>
            Choose your learning path. Each category includes hands-on projects
            and production-ready code patterns.
          </p>
        </header>

        <motion.div
          className={styles.grid}
          role="list"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={reduceMotion}
        >
          {CATEGORIES.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              href={card.href}
              asListItem
            />
          ))}
        </motion.div>

        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Want to start learning?</h2>
          <p className={styles.ctaSubtitle}>
            Master the tools and frameworks used to build high-performance
            digital products.
          </p>
          <motion.button
            type="button"
            className={buttonStyles.primary}
            onClick={() => setModalOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={quickTransition}
          >
            Request Training
          </motion.button>
        </div>
      </div>

      <RequestTutorialModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </motion.section>
  );
}
