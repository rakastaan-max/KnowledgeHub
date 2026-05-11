---
title: Mainboard & Chipsatz
description: Die Kommunikationszentrale des IT-Systems
difficulty: intermediate
---

Das **Mainboard (PCB – Printed Circuit Board)** ist die zentrale Platine, die **alle Komponenten physikalisch und elektronisch verbindet**. Der **Chipsatz** ist das Herzstück, das Daten zwischen Komponenten lenkt.

## Das Mainboard – Überblick

### Aufbau
```
┌─────────────────────────────────────────────┐
│  Mainboard (PCB) Schichten:                 │
│  - Layer 1: Signal & Stromversorgung        │
│  - Layer 2–4: Innenlayer (Verdrahtung)     │
│  - Layer 5: Signal & Masse                  │
│  - Durchkontaktierungen (Vias)              │
└─────────────────────────────────────────────┘

Komponenten auf PCB:
  ┌────────────────────────────────────────┐
  │  [CPU-Sockel]                          │
  │  [RAM-Slot]  [RAM-Slot]                │
  │  [Chipsatz]                            │
  │  [EEPROM]  [Timer]  [Batterie]        │
  │  [USB]  [SATA]  [Audio]  [Netzwerk]   │
  └────────────────────────────────────────┘
```

### Funktionen
- **Physisch**: Montieren aller Komponenten
- **Elektrisch**: Verbindung via Kupferleiterbahnen (Traces)
- **Kommunikation**: Bussysteme für Datenaustausch
- **Stromversorgung**: VRM (Voltage Regulator Module) für CPU/RAM

### Standards
- **ATX**: Standard-Desktop (30,5 cm × 24,4 cm)
- **Micro-ATX**: Kleiner
- **Mini-ITX**: Mobile/SFF (Small Form Factor)
- **EATX**: Erweitert (Server)

---

## Leiterbahnen & Signalintegrität

Siehe: **[Leiterbahnen & Bussysteme](./leiterbahnen.md)**

---

## Timing & Firmware

Siehe: **[Timer, CMOS & Firmware](./timing-firmware.md)**

---

## Chipsatz-Evolution

Siehe: **[Chipsatz-Evolution](./chipsatz-evolution.md)**

---

## Speicherhierarchie auf Mainboard

Siehe: **[Speicherhierarchie](./speicherhierarchie.md)**

---

## Klassische Mainboard-Architektur (Legacy)

```
         [CPU]
           │
      [FSB – Front Side Bus]
           │
    ┌──────┴──────┐
    │             │
[Northbridge] [Southbridge]
    │             │
  ┌─┴─┐       ┌───┴────┐
 RAM GPU     USB SATA Audio
```

**Problem**: FSB wurde zum Bottleneck

---

## Moderne Mainboard-Architektur

```
     [CPU (mit Speicherkontroller)]
            │
        [DMI 3.0] (schnell)
            │
       [Platform Controller Hub – PCH]
            │
    ┌───┬───┴────┬───┬───┐
   USB SATA Audio Net Expansion
```

**Vorteil**: CPU greift direkt auf RAM zu, keine FSB-Latenz

---

### 📖 Kapitel-Übersicht

1. **[Leiterbahnen & Bussysteme](./leiterbahnen.md)** – Physikalische Verbindungen
2. **[Timer, CMOS & Firmware](./timing-firmware.md)** – Zeitmessung und Boot
3. **[Chipsatz-Evolution](./chipsatz-evolution.md)** – Von Northbridge/Southbridge zu PCH
4. **[Speicherhierarchie](./speicherhierarchie.md)** – Register → RAM → SSD

---

### 📖 Weitere Lektüre
- Zurück: **[CPU & Architektur](../03-cpu-architektur/index.md)**
- Nächstes Modul: **[Glossar](../05-glossar/index.md)**
