# 📖 Bručounkova garáž • Znalostní báze a nápověda

Oficiální dokumentace, uživatelské manuály, příručky pro dispečink i řidiče a technická architektura pro systém **Bručounkova garáž**.

🌐 **Nápověda:** [napoveda.brucounkovagaraz.cz](https://napoveda.brucounkovagaraz.cz)  
🚀 **Aplikace dispečinku:** [app.brucounkovagaraz.cz](https://app.brucounkovagaraz.cz)

---

## 🎯 Obsah nápovědy

- **📱 Pro řidiče**
  - Průvodce mobilní aplikací a první přihlášení
  - Zahájení a ukončení směny
  - Kontrola a předání vozidla
- **🖥️ Pro dispečink**
  - Správa a evidence flotily vozidel
  - Plánování směn a přiřazování řidičů
  - Servisní partneři, termíny STK a údržba
- **🚗 Správa vozidel**
  - Digitální předávací protokoly
  - Hlášení technických závad a poškození
  - Postup při dopravní nehodě
- **🛠️ Pro vývojáře**
  - Architektura systému (Next.js, Supabase, Flutter)
  - Datový model a API integrace

---

## 💻 Lokální vývoj

Dokumentace je postavena na frameworku [Docusaurus 3](https://docusaurus.io/) s podporou TypeScriptu, Reactu a Mermaid diagramů.

### 1. Instalace závislostí

```bash
npm install
```

### 2. Spuštění lokálního serveru

```bash
npm run start
```

Web bude dostupný na adrese `http://localhost:3000/`. Změny v souborech se promítají v reálném čase (hot-reload).

### 3. Sestavení produkční verze

```bash
npm run build
```

Výsledné statické soubory se vygenerují do složky `build/`.

---

## 🚀 Nasazení na GitHub Pages

Nasazení probíhá automaticky pomocí **GitHub Actions** při každém pushi do větve `main`.

- **Repozitář:** `KubrosCz/napoveda.brucounkovagaraz.cz`
- **Doména:** `napoveda.brucounkovagaraz.cz` (konfigurováno přes `static/CNAME`)
- **Workflow:** `.github/workflows/deploy.yml`

---

## 📁 Struktura projektu

```text
├── docs/                 # Markdown dokumentace rozdělená do kapitol
│   ├── dispecink/        # Návody pro dispečery a správu
│   ├── ridici/           # Manuály k mobilní aplikaci pro řidiče
│   ├── vozidla/          # Protokoly, závady a servis
│   └── vyvojari/         # Technická dokumentace architektury
├── blog/                 # Záznamy o verzích a novinkách (Changelog)
├── static/               # Statické soubory (obrázky, CNAME, ikony)
├── src/                  # Vlastní React komponenty a CSS styly
├── docusaurus.config.ts  # Hlavní konfigurace portálu
└── sidebars.ts           # Definice navigačního stromu
```

---

© 2026 Bručounkova garáž • Poctivá flotila

