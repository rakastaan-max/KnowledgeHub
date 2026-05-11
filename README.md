# 📚 IT-Hardware Hub – Wissensdatenbank für Azubis

Ein **interaktiver Studienführer für Computerhardware** in der IT-Berufsausbildung. Gebaut mit **Astro + Starlight**, vollständig in Deutsch, strukturiert und kollaborativ für Teams.

## 🎯 Wofür?

Diese Wissensdatenbank wurde erstellt, um:
- **Komplexe Hardware-Konzepte** verständlich aufzubereiten
- **Prüfungsrelevantes Wissen** strukturiert bereitzustellen
- **Leichtes Kooperatives Lernen** durch Pull-Requests zu ermöglichen
- **Moderne Infrastruktur** (Git, Markdown, CI/CD) zu praktizieren

## 📖 Was ist drin?

```
Grundlagen
├─ Evolution der Datenverarbeitung
├─ Analog vs. Digital
└─ DV-Geräte-Kategorien

EVA-Prinzip
├─ Eingabe (Devices)
├─ Verarbeitung (CPU)
├─ Speicherung (RAM, HDD, SSD)
└─ Ausgabe (Monitore, Drucker)

CPU & Architektur
├─ CPU-Einheiten (ALU, Steuerwerk, IDU, FPU)
├─ RISC vs. CISC
└─ Cache & Register

Mainboard & Chipsatz
├─ Leiterbahnen & Signalintegrität
├─ Timer, CMOS, Firmware (BIOS/UEFI)
├─ Chipsatz-Evolution
└─ Speicherhierarchie

Glossar
└─ ~80 Fachbegriffe mit Definitionen
```

## 🚀 Quickstart

### Installation

```bash
# Repository klonen
git clone https://github.com/yourusername/knowledgehub.git
cd knowledgehub

# Dependencies installieren
npm install
```

### Lokal entwickeln

```bash
# Development-Server starten
npm run dev

# Öffne http://localhost:3000 im Browser
```

### Build für Produktion

```bash
# Statischen HTML-Output erzeugen
npm run build

# Lokal testen (statisch)
npm run preview
```

## ✍️ Wie trage ich neue Inhalte bei?

### Schritt 1: Neue Branch erstellen
```bash
git checkout -b feature/neues-kapitel
```

### Schritt 2: Neue Markdown-Datei hinzufügen

Beispiel: Neue Seite unter "Grundlagen" → `src/content/docs/01-grundlagen/neue-datei.md`

```markdown
---
title: Mein neues Kapitel
description: Kurze Beschreibung für SEO
difficulty: beginner
---

## Überschrift

Dein Inhalt hier...

### Unter-Überschrift

Weitere Details...
```

### Schritt 3: Sidebar aktualisieren (falls neue Kategorie)

Datei: `astro.config.mjs`

```mjs
sidebar: [
  // ... existing items ...
  {
    label: '🆕 Neue Kategorie',
    collapsed: false,
    items: [
      { label: 'Übersicht', slug: '06-new/index' },
      { label: 'Kapitel 1', slug: '06-new/chapter1' },
    ],
  },
],
```

### Schritt 4: Commit & Push
```bash
git add src/content/docs/01-grundlagen/neue-datei.md
git commit -m "Add: Neues Kapitel über [Thema]"
git push origin feature/neues-kapitel
```

### Schritt 5: Pull Request stellen

1. Gehe zu GitHub → **Pull Requests** Tab
2. Klicke **"New Pull Request"**
3. Wähle `main` Branch als Target
4. Beschreibe deine Änderungen
5. Warte auf Review & Feedback

---

## 🏗️ Projekt-Struktur

```
knowledgehub/
├── src/
│   ├── content/
│   │   ├── docs/           # Alle Markdown-Seiten
│   │   │   ├── index.md   # Startseite (Hero)
│   │   │   ├── 01-grundlagen/
│   │   │   ├── 02-eva-prinzip/
│   │   │   ├── 03-cpu-architektur/
│   │   │   ├── 04-mainboard-chipsatz/
│   │   │   └── 05-glossar/
│   │   └── config.ts       # Collection-Schema
│   ├── assets/             # Icons, Logos, Bilder
│   └── styles/             # CSS-Overrides
├── public/                 # Statische Assets
├── astro.config.mjs        # Astro & Starlight Config
├── tsconfig.json           # TypeScript Config
├── package.json            # NPM Dependencies
├── .gitignore              # Git Ignore Rules
└── README.md              # Diese Datei
```

## 🎨 Design & Styling

### Akzentfarbe
- **Sky Blue**: `#0284c7` (modern, IT-freundlich)
- Verwendet in: Buttons, Links, Highlights

### Markdown-Komponenten (Starlight)
```markdown
:::note
Dies ist eine Notiz
:::

:::tip[Pro Tipp]
Bessere Lösung für dieses Problem...
:::

:::warning
Wichtige Warnung!
:::

:::danger
Vorsicht! Das könnte schädlich sein.
:::
```

## 📝 Markdown Best Practices

- **Überschriften**: Nutze `## H2` als höchste Ebene (H1 wird vom Template gesetzt)
- **Code-Blöcke**: Gib die Sprache an: ` ```python ` oder ` ```bash `
- **Links**: Relativ zu anderen Pages: `[Link](../02-eva-prinzip/index.md)`
- **Bilder**: Speichere in `src/assets/`, referenziere via `![alt](../../assets/image.png)`

### Beispiel-Struktur einer Seite
```markdown
---
title: Kapitel-Titel
description: SEO-Beschreibung (max 160 Zeichen)
difficulty: beginner
---

## Einleitung
Kurze Zusammenfassung...

## Haupt-Thema 1
Details...

### Sub-Thema
Tiefergehende Erklärung...

## Haupt-Thema 2
Weiterer Stoff...

---

### 📖 Weitere Lektüre
- [Verwandtes Kapitel](../02-eva-prinzip/eingabe.md)
- [Zurück zur Übersicht](./index.md)
```

## 🔧 Development

### Abhängigkeiten
- **Astro 4.8+**: Web-Framework
- **@astrojs/starlight 0.24+**: Dokumentations-Template
- **Node 18+**: Runtime

### Häufige Befehle

| Befehl | Zweck |
|--------|-------|
| `npm run dev` | Start Dev-Server |
| `npm run build` | Produktions-Build |
| `npm run preview` | Vorschau des Builds |
| `npm run astro -- --help` | Astro CLI Hilfe |

## 🐛 Troubleshooting

### Port 3000 bereits in Verwendung?
```bash
# Alternative Port verwenden
npm run dev -- --port 3001
```

### Bilder nicht sichtbar?
- Sicherstellen, dass Bildpfad relativ korrekt ist
- Bilder müssen in `src/assets/` gespeichert sein

### Build schlägt fehl?
```bash
# Cache löschen
rm -rf .astro dist node_modules

# Neu installieren
npm install
npm run build
```

## 📱 Responsive Design

Starlight ist vollständig responsive:
- **Desktop**: Sidebar + Inhaltsbereich
- **Tablet**: Sidebar collapsible
- **Mobile**: Hamburger-Menü

## 🚢 Deployment

### Empfohlene Optionen

#### **GitHub Pages** (Kostenlos)
```bash
# Datei: .github/workflows/deploy.yml bereits vorbereitet?
# Wenn nicht: Starlight hat Templates
```

#### **Netlify** (Kostenlos mit Custom Domain möglich)
```bash
# Deploy via GitHub Integration
```

#### **Vercel** (Kostenlos, sehr schnell)
```bash
# Deploy via Git Push
```

## 🤝 Beitragen – Richtlinien

### Vor dem Commit
1. **Prüfe Rechtschreibung**: Deutsch, konsistente Terminologie
2. **Teste lokal**: `npm run dev` und navigiere durch deine neuen Seiten
3. **Konsistenz**: Halte dich an bestehende Struktur & Stil

### Review-Prozess
- Ein Teammitglied reviewt deinen PR
- Feedback geben & integrieren
- Nach Approval → Merge in `main`
- Deployment erfolgt automatisch

## 📞 Kontakt & Support

- **Fragen?** Stelle eine Issue auf GitHub
- **Feedback?** Discussions Tab nutzen
- **Bug gefunden?** Erstelle einen Bug-Report

## 📄 Lizenz

Dieses Projekt ist **MIT lizenziert** – frei nutzbar, auch kommerziell.

---

**Happy Learning! 🚀**

*Erstellt von IT-Azubis, für IT-Azubis*
