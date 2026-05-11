---
title: Analog vs. Digital
description: Signaltypen und ihre Bedeutung für die Datenverarbeitung
difficulty: beginner
---

Eine der **fundamentalen Unterscheidungen** in der Elektronik ist zwischen **analogen** und **digitalen Signalen**. Computer arbeiten ausschließlich mit digitalen Signalen – aber warum?

## Analoge Signale

### Definition
Erlauben eine **unendlich große Abstufung von Wertigkeiten** (kontinuierliche Werte).

### Charakteristika
- **Wertebereich**: Kontinuierlich (z.B. 0–5V können beliebige Werte zwischen annehmen)
- **Beispiele**:
  - Spannungsverlauf in einem Mikrofon (jeder Schalldruckpegel → eigener Spannungswert)
  - Temperaturkurve (38,2°C, 38,21°C, 38,211°C, …)
  - Radio-Frequenzen (AM/FM)
- **Vorteil**: Sehr präzise Abbildung natürlicher Phänomene
- **Nachteil**: Anfällig für Störungen und Rauschen

### Visualisierung
```
Spannung ^
         |    ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁  ← Glatte Kurve
         |   ▗▄▖ ▖▄▗
    0 V  |_____________________→ Zeit
```

## Digitale Signale

### Definition
Erlauben nur **eindeutige, unterscheidbare (diskrete) Werte**.

### Charakteristika
- **Wertebereich**: Begrenzt auf diskrete Stufen (z.B. nur 0V oder 5V)
- **Binärlogik**: Im Computer meist **nur zwei Zustände**:
  - `0` = Low (0V) = falsch
  - `1` = High (5V) = wahr
- **Beispiele**:
  - Computer-Speicher (Bit = 0 oder 1)
  - USB-Datenleitung (Paketweise 0 und 1)
  - Digitale Displays
- **Vorteil**: 
  - Robust gegen Störungen (kleine Schwankungen → gleiche Interpretation)
  - Einfach zu verarbeiten und zu speichern
- **Nachteil**: Weniger präzise Abbildung, Quantisierungsfehler möglich

### Visualisierung
```
Spannung ^
         |  ▁ ▁ ▁   ▁ ▁
         |  █ █ █ █ █ █  ← Stufen (0 oder 1)
         | ▝▀▝▀▝▀▝▀▝▀▝▀
    0 V  |_________________→ Zeit
         0 1 1 0 1 0 1 0 1
```

## Warum Computer digital arbeiten

| Grund | Erklärung |
|-------|-----------|
| **Einfachheit** | Nur zwei Zustände sind einfacher zu verwalten als unendlich viele |
| **Fehlertoleranz** | `0.1V` wird noch als `0` interpretiert; kleine Störungen beeinflussen nicht das Ergebnis |
| **Logische Operationen** | Digitale Gatter (AND, OR, NOT) sind mit zwei Zuständen leicht zu realisieren |
| **Zuverlässigkeit** | Kein Rauschen-Problem wie bei Analog |
| **Speicherung** | Digitale Daten (Bits) sind leicht zu speichern und zu verarbeiten |

## Umwandlung: Analog → Digital (und zurück)

```
[Mikrofon]  Analog-Signal  [ADC]  Digital 00110101...  [Computer]
            (Ton-Welle)       ↓      (Bits)
                           (Sampling)

[Lautsprecher] ← [DAC] ← Digital 00110101...  [Computer]
   (Ton-Welle)      ↓      (Bits)
             (Interpolation)
```

- **ADC** (Analog-Digital-Converter): Wandelt Analog → Digital
- **DAC** (Digital-Analog-Converter): Wandelt Digital → Analog
- **Sampling-Rate**: Je höher, desto präziser die Digitalisierung

## Praktische Beispiele

### Audio-CD
- Sampling-Rate: 44.100 Hz (pro Sekunde 44.100 Messungen)
- Bits pro Sample: 16 Bit (65.536 mögliche Werte pro Messung)
- Ergebnis: Digitale Audioqualität (verlustfrei)

### Video
- Pixel-Werte: RGB (je 0–255) = 256 diskrete Werte pro Kanal
- Reine Digitalwerte, keine Analogie

---

### 📖 Weitere Lektüre
- Nächstes Thema: **[DV-Geräte Kategorien](./dv-geraete.md)** – Systemklassifizierung
- Zurück: **[Evolution](./evolution.md)**
