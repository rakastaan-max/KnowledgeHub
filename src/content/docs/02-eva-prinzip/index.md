---
title: Das EVA-Prinzip
description: Der universelle Grundablauf elektronischer Datenverarbeitung
difficulty: beginner
---

Das **EVA-Prinzip** ist das **Fundament jedes IT-Systems**. Es beschreibt den logischen Ablauf, wie ein Computer Daten verarbeitet: **Eingabe → Verarbeitung → Ausgabe**.

Dieses Konzept ist so fundamental, dass **alle modernen Computer** diesem Modell folgen – vom Smartphone bis zum Supercomputer.

## Das EVA-Modell

```
┌─────────────┐    ┌──────────────────┐    ┌──────────────┐
│  EINGABE    │───▶│  VERARBEITUNG    │───▶│  AUSGABE     │
│   (Input)   │    │  + SPEICHERUNG   │    │   (Output)   │
└─────────────┘    └──────────────────┘    └──────────────┘
                            │
                            │ (bidirektional)
                            ▼
                     ┌──────────────┐
                     │ SPEICHERUNG  │
                     └──────────────┘
```

## Die vier Komponenten

### 1. **Eingabe (E – Input)**
- **Aufgabe**: Strukturierte Daten vom Benutzer oder anderen Systemen entgegennehmen
- **Hardware-Komponenten**:
  - Tastatur (alphabetische/numerische Eingabe)
  - Maus (Positionierungsinput)
  - Scanner (Digitalisierung von Dokumenten)
  - Barcode-Leser (maschinelle Erfassung)
  - Microphone (Audio)
  - Touchscreen (mobil)
- **Funktion**: Konvertiert **externe Signale** in maschinenlesbare **digitale Daten**

### 2. **Verarbeitung (V – Processing)**
- **Aufgabe**: Verarbeitet die Eingabedaten nach festgelegten Regeln (Programm)
- **Hardware-Komponenten**:
  - **Hauptprozessor (CPU)** – führt Instruktionen aus
  - **Chipsatz** – koordiniert Datenfluss
  - **Grafikkern (GPU)** – spezialisiert auf parallele Datenverarbeitung
- **Funktion**: Das **"Gehirn"** des Computers – führt Berechnungen, Vergleiche und Entscheidungen durch

### 3. **Speicherung (S – Storage & Memory)**
- **Aufgabe**: Steht im **ständigen Austausch** mit der Verarbeitungseinheit
- **Kategorien**:
  - **Flüchtig (Volatile)**: 
    - Arbeitsspeicher (RAM) – schnell, verliert Daten beim Ausschalten
  - **Dauerhaft (Non-Volatile)**:
    - Festplatten (HDD) – mechanisch, langsam, preiswert
    - SSDs – elektronisch, schnell, teuer
    - Flash-EEPROM (BIOS/UEFI) – enthält Boot-Firmware
- **Funktion**: **Kurzzeitige Zwischenspeicherung** (RAM) und **Langzeitspeicherung** (Festplatte)

### 4. **Ausgabe (A – Output)**
- **Aufgabe**: Gibt die erzeugten Ergebnisse an den Benutzer oder ein anderes System weiter
- **Hardware-Komponenten**:
  - Display / Monitor (visuell)
  - Drucker (physisch)
  - Lautsprecher (audio)
  - Netzwerk-Adapter (digital an anderen PC)
- **Funktion**: Konvertiert **digitale Verarbeitungsergebnisse** in **menschlich verständliche oder nutzbare Formen**

## Praktisches Beispiel: Taschenrechner-Programm

```
EINGABE:       Benutzer tippt "25 + 17"
               ↓
VERARBEITUNG:  CPU führt Addition durch (25 + 17 = 42)
               ↓ (zwischenspeichern in RAM)
SPEICHERUNG:   Ergebnis wird temporär im RAM gehalten
               ↓
AUSGABE:       Display zeigt "42"
```

## Erweitertes Verständnis

### Rückkopplung
Moderne Systeme haben oft **Rückkopplung** zwischen den Komponenten:
- **Benutzer gibt Daten ein** → Computer verarbeitet → **zeigt Zwischenergebnis**
- Benutzer sieht Ergebnis, justiert Eingabe nach → Neuer Durchlauf

### Speicherung ist zentral
Speicherung ist nicht isoliert – sie ist mit **Verarbeitung gekoppelt**:
- CPU liest Daten aus RAM
- Verarbeitet sie
- Schreibt Zwischenergebnisse zurück in RAM
- Speichert finale Ergebnisse auf Festplatte

## Warum ist das EVA-Prinzip wichtig?

| Grund | Bedeutung |
|-------|----------|
| **Universalmodell** | Gilt für alle IT-Systeme (PC, Smartphone, Mainframe) |
| **Systemverständnis** | Jedes neue Gerät kann mental mit EVA kategorisiert werden |
| **Architektur-Basis** | Alle anderen Module (CPU, Mainboard) bauen auf dieser Logik auf |
| **Prüfung** | Häufige Frage: „Ordne diese Komponente dem EVA-Prinzip zu" |

---

### 📖 Detaillierte Kapitel

- **[Eingabe](./eingabe.md)** – Inputgeräte & Datenerfassung
- **[Verarbeitung](./verarbeitung.md)** – CPU & Verarbeitungslogik
- **[Speicherung](./speicherung.md)** – RAM, HDD, SSD
- **[Ausgabe](./ausgabe.md)** – Outputgeräte & Darstellung

Wähle ein Kapitel, um tiefer einzusteigen.
