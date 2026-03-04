import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import styles from './Nav.module.css';
import buttonStyles from './Button/Button.module.css';
import { navVariants, quickTransition } from '../utils/animations';

const LOGO_URL =
  'https://www.figma.com/api/mcp/asset/67071104-7de0-4d70-b98f-9f4edb212fad';

const NAV_LINKS = [
  { label: 'Programmes', href: '/programmes' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Consultancy', href: '/#consultancy' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const SCROLL_EXPAND_THRESHOLD = 80;

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrolledRef = useRef(false);

  useLenis((lenis) => {
    const next = lenis.scroll > SCROLL_EXPAND_THRESHOLD;
    if (next !== prevScrolledRef.current) {
      prevScrolledRef.current = next;
      setIsScrolled(next);
    }
  });

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const expanded = mobileMenuOpen ? 'true' : 'false';
  const dropdownHidden = mobileMenuOpen ? 'false' : 'true';

  return (
    <div className={`${styles.navWrapper} ${isScrolled ? styles.isScrolled : ''}`}>
      <motion.header
        className={styles.nav}
        role="banner"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.container}>
          <motion.a
            href="/"
            className={styles.logo}
            aria-label="Fosco Labs home"
            whileHover={{ opacity: 0.85 }}
            whileTap={{ scale: 0.98 }}
            transition={quickTransition}
          >
            <img
              src={LOGO_URL}
              alt="Fosco Labs Consulting"
              className={styles.logoImg}
              width={98}
              height={31}
            />
          </motion.a>
          <nav className={styles.links} aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                className={styles.link}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.98 }}
                transition={quickTransition}
              >
                {label}
              </motion.a>
            ))}
          </nav>
          <div className={styles.cta}>
            <motion.a
              href="/programmes"
              className={buttonStyles.primaryCompact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={quickTransition}
            >
              View Programmes
            </motion.a>
          </div>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={expanded}
          >
            {mobileMenuOpen ? (
              <CloseIcon className={styles.menuButtonIcon} />
            ) : (
              <HamburgerIcon className={styles.menuButtonIcon} />
            )}
          </button>
        </div>

        {/* Figma 111-7236: expanded menu inside same nav card */}
        <div
          className={`${styles.mobileMenuDropdown} ${mobileMenuOpen ? styles.isOpen : ''}`}
          aria-hidden={dropdownHidden}
        >
          <nav className={styles.mobileMenuLinks} aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.mobileMenuLink}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileMenuCtaWrap}>
            <a href="/programmes" className={buttonStyles.primaryCompact} onClick={closeMenu}>
              View Programmes
            </a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
