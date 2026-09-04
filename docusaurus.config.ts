import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bručounkova garáž',
  tagline: 'Znalostní databáze, manuály a nápověda pro dispečink i řidiče',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://napoveda.brucounkovagaraz.cz',
  baseUrl: '/',

  organizationName: 'KubrosCz',
  projectName: 'napoveda.brucounkovagaraz.cz',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: ['docusaurus-plugin-image-zoom'],

  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
    localeConfigs: {
      cs: {
        label: 'Čeština',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Novinky a aktualizace systému',
          blogDescription: 'Aktualizace, novinky ve verzích a provozní zprávy garáže',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Bručounkova garáž',
      logo: {
        alt: 'Bručounkova garáž Logo',
        src: 'img/logo.png',
        height: 36,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📖 Návody & Příručky',
        },
        {
          to: '/docs/ridici/mobilni-aplikace',
          label: '📱 Pro řidiče',
          position: 'left',
        },
        {
          to: '/docs/dispecink/uvod',
          label: '🖥️ Pro dispečink',
          position: 'left',
        },
        {
          to: '/blog',
          label: '📢 Novinky & Verze',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📚 Dokumentace',
          items: [
            {
              label: 'Úvod do systému',
              to: '/docs/uvod',
            },
            {
              label: 'Příručka pro řidiče',
              to: '/docs/ridici/mobilni-aplikace',
            },
            {
              label: 'Správa flotily a směn',
              to: '/docs/dispecink/uvod',
            },
            {
              label: 'Předávací protokoly vozidel',
              to: '/docs/vozidla/predavaci-protokoly',
            },
          ],
        },
        {
          title: '🛠️ Rychlé odkazy',
          items: [
            {
              label: 'Webová aplikace dispečinku',
              href: 'https://app.brucounkovagaraz.cz',
            },
            {
              label: 'Záznamy změn (Changelog)',
              to: '/blog',
            },
          ],
        },
        {
          title: '📞 Podpora & Dispečink',
          items: [
            {
              label: 'Dispečink NONSTOP: +420 123 456 789',
              href: 'tel:+420123456789',
            },
            {
              label: 'Hlášení technických závad',
              to: '/docs/vozidla/hlaseni-zavad',
            },
            {
              label: 'Emailová podpora',
              href: 'mailto:podpora@brucounek.cz',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bručounkova garáž • Inteligentní správa flotily a dispečinku pro <a href="https://poctiva-flotila.cz" target="_blank" rel="noopener noreferrer">Poctivá flotila</a> • Vyrobil <a href="https://www.kubros.cz" target="_blank" rel="noopener noreferrer">KuBros Solutions s.r.o.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em):not(a) > img:not(.no-zoom)',
      background: {
        light: 'rgba(15, 23, 42, 0.85)',
        dark: 'rgba(10, 15, 30, 0.92)'
      },
      config: {
        margin: 24,
        scrollOffset: 0,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
