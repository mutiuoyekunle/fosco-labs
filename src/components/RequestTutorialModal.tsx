import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './RequestTutorialModal.module.css';
import buttonStyles from './Button/Button.module.css';

type RequestTutorialModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function RequestTutorialModal({ isOpen, onClose }: RequestTutorialModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ scrollTop: 0, scrollHeight: 0, clientHeight: 0 });
  const thumbDragRef = useRef({ isDragging: false, startY: 0, startScrollTop: 0 });

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollState({
      scrollTop: el.scrollTop,
      scrollHeight: el.scrollHeight,
      clientHeight: el.clientHeight,
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      updateScrollState();
    });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [isOpen, updateScrollState]);

  const onScroll = () => updateScrollState();

  const canScroll = scrollState.scrollHeight > scrollState.clientHeight;
  const trackHeight = scrollState.clientHeight - 8;
  const thumbHeight = scrollState.clientHeight && scrollState.scrollHeight
    ? Math.min(trackHeight, Math.max(40, (scrollState.clientHeight / scrollState.scrollHeight) * trackHeight))
    : 40;
  const thumbTop = scrollState.scrollHeight > scrollState.clientHeight
    ? (scrollState.scrollTop / (scrollState.scrollHeight - scrollState.clientHeight)) * (trackHeight - thumbHeight)
    : 0;

  const onTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !canScroll || thumbDragRef.current.isDragging) return;
    const track = e.currentTarget;
    const rect = track.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const ratio = y / rect.height;
    el.scrollTop = ratio * (el.scrollHeight - el.clientHeight);
  };

  const onThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    thumbDragRef.current = { isDragging: true, startY: e.clientY, startScrollTop: scrollRef.current?.scrollTop ?? 0 };
    const onMove = (e2: MouseEvent) => {
      if (!thumbDragRef.current.isDragging || !scrollRef.current) return;
      const delta = e2.clientY - thumbDragRef.current.startY;
      const maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const trackHeight = scrollRef.current.clientHeight - thumbHeight - 8;
      const ratio = trackHeight ? delta / trackHeight : 0;
      scrollRef.current.scrollTop = Math.max(0, Math.min(maxScroll, thumbDragRef.current.startScrollTop + ratio * maxScroll));
    };
    const onUp = () => {
      thumbDragRef.current.isDragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    const scrollY = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-tutorial-title"
    >
      <div className={styles.dialog}>
        <div
          ref={scrollRef}
          className={styles.dialogScroll}
          onScroll={onScroll}
        >
        {/* Mobile: handle bar at very top (action sheet affordance) */}
        <div className={styles.actionSheetTop}>
          <span className={styles.sheetHandleBar} aria-hidden />
          <button
            type="button"
            className={styles.closeActionSheet}
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              className={styles.closeIcon}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* X in its own row above the title (desktop + mobile) */}
        <div className={styles.headerTop}>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              className={styles.closeIcon}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <header className={styles.header}>
          <h2 id="request-tutorial-title" className={styles.title}>
            Request a Training Session
          </h2>
          <p className={styles.description}>
            Tell us what you want to learn. We'll reach out to discuss a
            tailored learning path for you or your team.
          </p>
        </header>

        <form
          className={styles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.field}>
            <label htmlFor="request-full-name" className={styles.label}>
              Full Name
            </label>
            <input
              id="request-full-name"
              type="text"
              className={styles.input}
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="request-email" className={styles.label}>
              Email Address
            </label>
            <input
              id="request-email"
              type="email"
              className={styles.input}
              placeholder="name@email.com"
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="request-phone" className={styles.label}>
              WhatsApp / Mobile
            </label>
            <div className={styles.phoneRow}>
              <select
                id="request-country"
                className={`${styles.input} ${styles.select} ${styles.countryCodeSelect}`}
                defaultValue="+44"
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
                <option value="+39">+39</option>
                <option value="+34">+34</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
                <option value="+86">+86</option>
                <option value="+971">+971</option>
                <option value="+966">+966</option>
                <option value="+20">+20</option>
                <option value="+212">+212</option>
              </select>
              <input
                id="request-phone"
                type="tel"
                className={`${styles.input} ${styles.phoneInput}`}
                placeholder="Mobile"
                autoComplete="tel-national"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="request-interest" className={styles.label}>
              Learning Interest
              <span className={styles.labelMobileSuffix}> (Service Type)</span>
            </label>
            <select
              id="request-interest"
              className={`${styles.input} ${styles.select}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="ai-engineering">AI Engineering</option>
              <option value="javascript-frontend">JavaScript & Frontend</option>
              <option value="ui-engineering">UI Engineering</option>
              <option value="ai-assisted-coding">AI-Assisted Coding</option>
              <option value="firebase-supabase">Firebase & Supabase</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="request-level" className={styles.label}>
              Current Skill Level
            </label>
            <select
              id="request-level"
              className={`${styles.input} ${styles.select}`}
              defaultValue=""
            >
              <option value="" disabled>
                Select your level
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="request-goals" className={styles.label}>
              What are you looking to achieve?
            </label>
            <textarea
              id="request-goals"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="e.g., I want to build a custom AI chatbot for my SaaS..."
              rows={3}
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={buttonStyles.primary}>
              Submit Request
            </button>
            <p className={styles.whatsappPrompt}>
              Need a faster response?{' '}
              <a
                href="https://wa.me/447359939606"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </form>
        </div>
        {canScroll && (
          <div
            className={styles.customScrollbarTrack}
            onClick={onTrackClick}
            role="scrollbar"
            aria-valuenow={scrollState.scrollHeight ? Math.round((scrollState.scrollTop / (scrollState.scrollHeight - scrollState.clientHeight)) * 100) : 0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Scroll"
            style={{ pointerEvents: 'auto' }}
          >
            <div
              className={styles.customScrollbarThumb}
              style={{ height: thumbHeight, top: 4 + thumbTop }}
              onMouseDown={onThumbMouseDown}
            />
          </div>
        )}
      </div>
    </div>
  );
}
