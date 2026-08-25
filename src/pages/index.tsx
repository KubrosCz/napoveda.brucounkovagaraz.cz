import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

interface HubCardItem {
  title: string;
  icon: string;
  description: string;
  link: string;
  badge?: string;
}

const hubCards: HubCardItem[] = [
  {
    title: 'Mobilní aplikace pro řidiče',
    icon: '📱',
    description:
      'Návod pro instalaci a používání aplikace v terénu: přihlášení, začátek a konec směny, fotodokumentace a předání vozu.',
    link: '/docs/ridici/mobilni-aplikace',
    badge: 'Pro řidiče',
  },
  {
    title: 'Dispečink & Webový portál',
    icon: '🖥️',
    description:
      'Kompletní manuál dispečerského rozhraní: schvalování protokolů, plánování směn, správa řidičů a evidence tržeb.',
    link: '/docs/dispecink/uvod',
    badge: 'Pro dispečery',
  },
  {
    title: 'Vozový park & Protokoly',
    icon: '🚗',
    description:
      'Správa aut, servisní intervaly, platnost STK, postup při dopravní nehodě a hlášení technických závad vozidel.',
    link: '/docs/vozidla/predavaci-protokoly',
    badge: 'Flotila',
  },
  {
    title: 'Technická dokumentace & API',
    icon: '⚙️',
    description:
      'Architektura systému, databáze Supabase, konfigurace Next.js webu, Flutter mobilní aplikace a zabezpečení dat.',
    link: '/docs/vyvojari/architektura',
    badge: 'Vývojáři & IT',
  },
];

const fastActions = [
  { title: 'Jak správně převzít a předat vozidlo?', link: '/docs/vozidla/predavaci-protokoly', icon: '📝' },
  { title: 'Postup při hlášení závady na autě', link: '/docs/vozidla/hlaseni-zavad', icon: '⚠️' },
  { title: 'Jak začít a ukončit směnu v aplikaci?', link: '/docs/ridici/smeny-a-vyuctovani', icon: '⏱️' },
  { title: 'Dopravní nehoda – nouzový postup', link: '/docs/vozidla/nehoda-postup', icon: '🚨' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroGlow} />
      <div className="container">
        <div className={styles.heroBadge}>
          <span>Nápověda & Znalostní báze</span>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          Bručounkova <span className={styles.heroTitleHighlight}>Garáž</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          Návody, postupy a dokumentace pro dispečink, řidiče v terénu a správu vozového parku na jednom místě.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx('button', styles.primaryBtn)} to="/docs/uvod">
            📖 Otevřít kompletní příručku
          </Link>
          <Link className={clsx('button', styles.secondaryBtn)} to="/docs/ridici/mobilni-aplikace">
            📱 Rychlý start pro řidiče
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Nápověda a znalostní báze"
      description="Návody, manuály a postupy pro systém Bručounkova garáž – dispečink a mobilní aplikace pro řidiče.">
      <HomepageHeader />
      <main>
        <section className={styles.quickHubSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.sectionCategory}>Kategorie dokumentace</div>
              <Heading as="h2" className={styles.sectionTitle}>
                Vyberte si oblast podpory
              </Heading>
              <p className={styles.sectionDesc}>
                Přehledně strukturované návody rozdělené podle vašich každodenních potřeb a pracovních rolí.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {hubCards.map((card, idx) => (
                <Link key={idx} to={card.link} className={styles.hubCard}>
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {card.title}
                  </Heading>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <span className={styles.cardLink}>
                    Zobrazit návody &rarr;
                  </span>
                </Link>
              ))}
            </div>

            {/* Fast Action Quick Help */}
            <div className={styles.fastActionBox}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Heading as="h3" style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                  ⚡ Rychlé postupy a řešení častých situací
                </Heading>
                <p style={{ color: 'inherit', opacity: 0.85, margin: 0 }}>
                  Nejčastěji hledané návody a okamžité instrukce pro provoz v terénu:
                </p>
              </div>
              <div className={styles.actionGrid}>
                {fastActions.map((action, idx) => (
                  <Link key={idx} to={action.link} className={styles.actionPill}>
                    <span style={{ fontSize: '1.3rem' }}>{action.icon}</span>
                    <span>{action.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
