import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'uvod',
    {
      type: 'category',
      label: '📱 Příručka pro řidiče',
      link: {
        type: 'generated-index',
        title: 'Příručka pro řidiče',
        description: 'Vše, co potřebujete vědět o práci s mobilní aplikací, začátku a konci směny a vyúčtování.',
        slug: '/kategorie/ridici',
      },
      items: [
        'ridici/mobilni-aplikace',
        'ridici/mobilni-aplikace-prvni-kroky',
        'ridici/mobilni-aplikace-ui',
        'ridici/mobilni-aplikace-prehled',
        'ridici/mobilni-aplikace-smeny',
        'ridici/mobilni-aplikace-vozidlo',
        'ridici/mobilni-aplikace-vice',
      ],
    },
    {
      type: 'category',
      label: '🖥️ Příručka pro dispečink',
      link: {
        type: 'generated-index',
        title: 'Příručka pro dispečink',
        description: 'Návody pro dispečery, operátory a vedoucí: správa směn, flotily a kontrola provozu.',
        slug: '/kategorie/dispecink',
      },
      items: [
        'dispecink/uvod',
        'dispecink/flotila',
        'dispecink/planovani-smen',
      ],
    },
    {
      type: 'category',
      label: '🚗 Vozový park a protokoly',
      link: {
        type: 'generated-index',
        title: 'Vozový park a protokoly',
        description: 'Pravidla pro předávání vozidel, servis, STK a postupy při nehodách nebo závadách.',
        slug: '/kategorie/vozidla',
      },
      items: [
        'vozidla/predavaci-protokoly',
        'vozidla/hlaseni-zavad',
        'vozidla/nehoda-postup',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Technická dokumentace',
      link: {
        type: 'generated-index',
        title: 'Technická dokumentace',
        description: 'Informace o architektuře, databázi Supabase, Next.js a Flutter aplikaci.',
        slug: '/kategorie/vyvojari',
      },
      items: [
        'vyvojari/architektura',
      ],
    },
     {
  type: 'doc',
  id: 'zos/zasady_ochrany_soukromi',
  label: '🛡️ Zásady ochrany soukromí',
}
  ],
};

export default sidebars;
