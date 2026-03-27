import styles from './ProgrammesPage.module.css';
import buttonStyles from '../components/Button/Button.module.css';

const PROGRAMME_HIGHLIGHTS = [
  '12-week guided programme',
  '4 modules plus a final capstone project',
  'No prior AI experience required',
  'Installment payment available',
] as const;

const LEARNING_OUTCOMES = [
  'AI foundations and prompt engineering',
  'AI API integration with OpenAI-style services',
  'Building AI chat interfaces and workflow tools',
  'Retrieval-Augmented Generation (RAG) systems',
  'AI workflows, automation, and deployment',
] as const;

const MODULES = [
  {
    id: 'module-1',
    label: 'Module 1',
    title: 'AI Foundations',
    weeks: 'Weeks 1-3',
    skills: [
      'Understanding LLM APIs',
      'Prompt engineering fundamentals',
      'API integration',
      'Using AI coding assistants such as ChatGPT, Copilot, and Lovable',
    ],
    projectTitle: 'Sample project',
    projectName: 'AI Text Summarizer',
    projectDescription:
      'Build a tool that sends text to an AI API and returns a structured summary.',
  },
  {
    id: 'module-2',
    label: 'Module 2',
    title: 'AI Web Applications',
    weeks: 'Weeks 4-6',
    skills: [
      'Building AI chat interfaces',
      'React / Next.js basics',
      'Frontend and AI API integration',
      'Prompt workflows',
    ],
    projectTitle: 'Sample project',
    projectName: 'AI Chat Assistant Web App',
    projectDescription:
      'Build a browser-based AI assistant with a chat interface and conversation history.',
  },
  {
    id: 'module-3',
    label: 'Module 3',
    title: 'Retrieval AI (RAG)',
    weeks: 'Weeks 7-9',
    skills: [
      'Embeddings',
      'Vector databases',
      'Document indexing',
      'Retrieval-Augmented Generation (RAG)',
    ],
    projectTitle: 'Sample project',
    projectName: 'AI Document Q&A System',
    projectDescription:
      'Users upload documents and ask questions about them using AI retrieval techniques.',
  },
  {
    id: 'module-4',
    label: 'Module 4',
    title: 'AI Systems & Deployment',
    weeks: 'Weeks 10-11',
    skills: [
      'AI workflows',
      'Basic agent patterns',
      'Cloud deployment',
      'AI application architecture',
    ],
    projectTitle: 'Sample project',
    projectName: 'AI Workflow Assistant',
    projectDescription:
      'Explore builds such as an AI research assistant, AI meeting summarizer, or AI support assistant.',
  },
  {
    id: 'capstone',
    label: 'Week 12',
    title: 'Final Capstone Project',
    weeks: 'Week 12',
    skills: [
      'Scope and design a complete AI-powered product',
      'Ship a production-style solution using the concepts learned in the programme',
      'Document the project for portfolio and hiring conversations',
    ],
    projectTitle: 'Example projects',
    projectName: 'AI Knowledge Base, AI Customer Support Assistant, AI Research Tool, AI Study Assistant',
    projectDescription:
      'Students design and deploy a complete AI-powered application as their final portfolio piece.',
  },
] as const;

const OUTCOMES = [
  'Multiple AI-powered applications',
  'Portfolio-ready GitHub repositories',
  'Experience building AI systems with LLM APIs and RAG concepts',
] as const;

export function ProgrammesPage() {
  return (
    <main className={styles.main} id="main-content">
      {/* Hero: Page title + short description */}
      <section className={styles.heroWrapper}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Fosco Labs flagship cohort</p>
            <h1 className={styles.pageTitle}>AI Development Programme</h1>
            <p className={styles.pageDescription}>
              Become an AI engineer in 12 weeks. This programme is built to
              take learners from beginner to professional with practical,
              production-ready skills in AI engineering, AI web applications,
              retrieval systems, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Body content area */}
      <section className={styles.bodySectionWrapper}>
        <div className={styles.bodySection}>
          <section id="ai-development-programme" className={styles.featuredProgramme}>
            <div className={styles.featuredCopy}>
              <div className={styles.titleStack}>
                <span className={styles.kicker}>From beginner to professional</span>
                <h2 className={styles.featuredTitle}>Build real AI-powered systems</h2>
                <p className={styles.featuredDescription}>
                  The goal of this programme is to prepare learners to build
                  real AI-powered systems aligned with the skills used in modern
                  AI engineering roles.
                </p>
              </div>

              <ul className={styles.highlightList}>
                {PROGRAMME_HIGHLIGHTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.featuredActions}>
                <a href="/contact" className={buttonStyles.primary}>
                  Apply Now
                </a>
                <a href="#roadmap" className={buttonStyles.secondary}>
                  View Roadmap
                </a>
              </div>
            </div>

            <aside className={styles.priceCard}>
              <span className={styles.priceBadge}>Current cohort</span>
              <p className={styles.priceLabel}>Price</p>
              <p className={styles.priceValue}>£599</p>
              <p className={styles.priceNote}>Installment payment is available</p>

              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Class starts</p>
                <p className={styles.metaValue}>Saturday 11th April, 2026</p>
              </div>

              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Duration</p>
                <p className={styles.metaValue}>12 weeks</p>
              </div>

              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Structure</p>
                <p className={styles.metaValue}>4 modules + capstone project</p>
              </div>
            </aside>
          </section>

          <section id="overview" className={styles.overviewGrid}>
            <article className={styles.infoCard}>
              <h2>Who this programme is for</h2>
              <p>
                Suitable for beginners, junior, mid-level, and senior
                developers who want practical AI engineering skills they can use
                in real product delivery.
              </p>
              <p className={styles.emphasis}>No prior AI experience required.</p>
            </article>

            <article className={styles.infoCard}>
              <h2>What you will learn</h2>
              <ul className={styles.checkList}>
                {LEARNING_OUTCOMES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section id="roadmap" className={styles.roadmapSection}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Programme roadmap</p>
              <h2 className={styles.sectionTitle}>12-week learning path</h2>
              <p className={styles.sectionDescription}>
                Four structured modules build from fundamentals to real AI
                system delivery, followed by a final capstone project.
              </p>
            </div>

            <div className={styles.roadmapGrid}>
              {MODULES.map((module) => (
                <article key={module.id} className={styles.moduleCard}>
                  <div className={styles.moduleHead}>
                    <span className={styles.moduleBadge}>{module.label}</span>
                    <span className={styles.moduleWeeks}>{module.weeks}</span>
                  </div>

                  <h3 className={styles.moduleTitle}>{module.title}</h3>

                  <div className={styles.moduleBlock}>
                    <p className={styles.moduleBlockTitle}>Skills</p>
                    <ul className={styles.moduleList}>
                      {module.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.moduleProject}>
                    <p className={styles.moduleBlockTitle}>{module.projectTitle}</p>
                    <p className={styles.projectName}>{module.projectName}</p>
                    <p className={styles.projectDescription}>
                      {module.projectDescription}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="outcomes" className={styles.outcomesSection}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Graduate outcomes</p>
              <h2 className={styles.sectionTitle}>What learners finish with</h2>
            </div>

            <div className={styles.outcomesGrid}>
              {OUTCOMES.map((item) => (
                <article key={item} className={styles.outcomeCard}>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </section>

          <section id="pricing" className={styles.pricingSection}>
            <article className={`${styles.infoCard} ${styles.infoCardDark}`}>
              <h2>Pricing and enrollment</h2>
              <ul className={styles.darkList}>
                <li>Programme fee: £599</li>
                <li>Installment payment is available</li>
                <li>Current cohort starts Saturday 11th April, 2026</li>
                <li>Applications are open while places remain available</li>
              </ul>
            </article>

            <article className={styles.infoCard}>
              <h2>Need more details before applying?</h2>
              <p>
                Use the contact page if you want clarification on structure,
                payment plan options, suitability for your current level, or
                the type of capstone project you can build.
              </p>
              <div className={styles.inlineActions}>
                <a href="/contact" className={buttonStyles.primary}>
                  Contact Us
                </a>
              </div>
            </article>
          </section>
        </div>
      </section>

      {/* CTA section */}
      <section className={styles.ctaSectionWrapper}>
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to join the cohort?</h2>
            <p className={styles.ctaDescription}>
              Tell us your current level, your goals, and whether you want the
              installment option. We&apos;ll help you confirm if this programme
              is the right fit.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="/contact" className={buttonStyles.primary}>
              Apply Now
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
