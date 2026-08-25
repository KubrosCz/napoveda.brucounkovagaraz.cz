---
sidebar_position: 1
title: Technická architektura
description: Architektura systému Bručounkova garáž, technologie a databázový model.
---

# ⚙️ Technická architektura

Systém **Bručounkova garáž** je navržen jako moderní, škálovatelná a vysoce dostupná cloudová platforma.

---

## Technologický stack

| Komponenta | Technologie | Popis |
| :--- | :--- | :--- |
| **Backend & Databáze** | [Supabase](https://supabase.com) (PostgreSQL) | Auth, Realtime DB, Row-Level Security, Storage pro fotky |
| **Webový Dispečink** | [Next.js 15](https://nextjs.org) (App Router, Tailwind CSS) | Administrativní a dispečerský webový portál |
| **Mobilní Aplikace** | [Flutter](https://flutter.dev) (Dart) | Multiplatformní aplikace pro iOS i Android |
| **Znalostní báze** | [Docusaurus 3](https://docusaurus.io) (TypeScript, React) | Portál s nápovědou a dokumentací |

---

## Datový tok a bezpečnost

- **Autentizace**: Supabase Auth s JWT tokeny a rolemi (`admin`, `dispatcher`, `driver`).
- **Oprávnění**: Přísná Row-Level Security (RLS) pravidla na úrovni databáze.
- **Předávací protokoly**: Fotografie jsou ukládány v zabezpečeném Supabase Storage bucketu s časově limitovanými podepsanými URL.
