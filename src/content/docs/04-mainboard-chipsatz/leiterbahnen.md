---
title: Leiterbahnen & Bussysteme
description: Physikalische Verbindungen und Signalintegrität
difficulty: intermediate
---

Die **Leiterbahnen (Traces)** auf dem Mainboard sind die "Nervenbahnen" des Computers. Sie transportieren Daten zwischen allen Komponenten. **Signalintegrität** ist kritisch bei hohen Frequenzen.

## Leiterbahnen (Traces) auf der PCB

### Physikalischer Aufbau
```
Mainboard (Schicht-Struktur):

Layer 1 (Top):        Signal-Leiterbahnen + Komponenten
                      │
                      ├─ Kupferspuren (50–100 µm dick)
                      ├─ Lötstopplack (isoliert)
                      └─ Beschriftung (weiß/gelb)

Layer 2–4 (Interior): Innen-Lagen (Verdrahtung & Masse)
                      │
                      ├─ Via (Durchkontaktierungen)
                      └─ Stromverteilung

Layer 5 (Bottom):     Zurück-Leiterbahnen + Kontakte
```

### Via (Durchkontaktierung)
- **Funktion**: Verbindung zwischen PCB-Lagen
- **Größe**: 0,2–0,5 mm Durchmesser
- **Material**: Kupfer gefüllt
- **Kosten**: Je mehr Vias, desto teurer die Platine

### Leiterbahn-Breite & Stromkapazität
```
Je breiter die Leiterbahn, desto mehr Strom:

Breite     Stromlast    Beispiel
─────────────────────────────────
0,1 mm  →  10 mA       Signal-Leitungen
0,3 mm  →  50 mA       Daten-Bus
0,5 mm  →  100 mA+     Stromversorgung
```

---

## Bussysteme – Daten-Highways

### Was ist ein Bus?
**Bus** = parallele oder serielle Leitungen, über die Daten übertragen werden.

### Typische Busse im Mainboard

#### **Front Side Bus (FSB) – Legacy**
- Verbindung: CPU ↔ Northbridge
- Frequenz: 100–1600 MHz
- Breite: 64–128 Bit
- **Problem**: Wurde zum Bottleneck (latency)
- **Status**: Modern veraltet

#### **DMI (Direct Media Interface) – Modern**
- Verbindung: CPU (mit Memory Controller) ↔ PCH
- Frequenz: 4–8 GHz
- Duplex: Bidirektional
- **Vorteil**: Schneller als FSB
- **Latenz**: <1 µs

#### **PCI (Peripheral Component Interconnect) – Legacy**
- Erweiterungskarten-Bus
- Frequenz: 33 MHz
- Breite: 32 Bit
- **Status**: Veraltet (nur noch auf alten Boards)

#### **PCI Express (PCIe) – Modern**
- Serielle Point-to-Point Verbindungen
- Generationen:
  - PCIe 3.0: 16 GB/s (16 lanes)
  - PCIe 4.0: 32 GB/s
  - PCIe 5.0: 64 GB/s
- **Einsatz**: GPUs, SSDs (M.2 NVMe), Network Cards
- **Topologie**: Jedes Gerät hat eigene Lane

#### **SATA (Serial ATA)**
- Verbindung: Chipsatz ↔ Festplatte/SSD
- Geschwindigkeit: 6 Gb/s (SATA III)
- **Nachfolger**: M.2 NVMe (über PCIe 4.0: bis 64 Gb/s)

#### **USB**
- Externe Peripherie
- USB 3.1: 10 Gb/s
- USB 3.2 Gen 2x2: 20 Gb/s
- USB 4: 40 Gb/s (Thunderbolt-kompatibel)

---

## Clock Skew & Signalintegrität

### Das Problem
```
Parallele Leiterbahnen bei hohen Frequenzen (> 1 GHz):

Leiterbahn A: ──┐ ┌──┐ ┌─  (Signal)
Leiterbahn B: ──┐ ┐  └──  (Signal)
               ^
           UNTERSCHIED in Laufzeit!

Problem:
  - Signal auf Bahn A kommt 0,3 ns früher an
  - CPU erwartet: Beide gleichzeitig
  - Resultat: Fehler in Dateninterpretation
```

### Lösung: Meander (Schlangenlinien)

```
Korrektur der Laufzeit durch absichtlich längere Wege:

Schnelle Bahn:    ───────────────  (direkt)
Langsame Bahn:    ░░░░░░░░░░░░░░░░ (Schlangenlinien)

Durch Schleifen wird Pfad länger:
├─ Laufzeit angleichen
├─ Alle Signale treffen zusammen ein
├─ Daten-Integrität gewährleistet
```

**Fachbegriff**: **Clock Skew** (Zeitversatz)

### Andere Herausforderungen

#### **Signal Reflections**
- Bei falscher Impedanz reflektiert Signal zurück
- Lösung: Impedanzanpassung (typisch 50–60 Ω)

#### **Crosstalk**
- Signale beeinflussen sich gegenseitig
- Lösung: Guard Traces (Abstandshaltung)

#### **EMI (Electromagnetic Interference)**
- Hochfrequenz-Störungen
- Lösung: Faraday Cage (Schirmung)

---

## Praktische Mainboard-Komponenten

### CPU-Sockel (Socket)
```
┌─────────────────┐
│   [CPU]         │
├─────────────────┤
│ Kontakte (Pins) │  ← Hunderte von Pins
│ oder Löcher     │   (je nach Socket-Typ)
└─────────────────┘
     Mainboard
```

### RAM-Slots (DIMM-Sockel)
- **Anzahl**: 2–4 Slots (je nach Mainboard)
- **Kontakte**: ~288 Pins (DDR4/DDR5)
- **Keying**: Notch (Kerbe) verhindert Verpolung

### Spannungsregler (VRM – Voltage Regulator Module)
```
[12V Stromversorgung] ──→ [VRM] ──→ [1,2V für CPU]

Aufgabe:
  - 12V → 1,2–1,8V umwandeln
  - Strom regulieren (~200 A für CPU!)
  - Ripple (Spannungsschwankungen) minimieren
```

---

## Hochgeschwindigkeits-Leiterbahnen

### Impedanzberechnung
```
Z = √(L/C)

Z = Impedanz (Ω)
L = Induktivität pro Länge
C = Kapazität pro Länge

Typische Werte:
  - Differential Pair (z.B. LVDS): 100 Ω
  - Einzelner Trace: 50–60 Ω
```

### Design-Regeln
1. **Längenmatch**: Alle parallelen Signale sollten gleich lang sein (±10 mm)
2. **Abstand**: Signale sollten Abstände einhalten (3× Spurbreite)
3. **Layer-Stackup**: Referenz-Ebene direkt darunter/darüber
4. **Via-Placement**: Stubs minimieren (Reflexionen)

---

## Praktische Anwendung: M.2 NVMe SSD

```
M.2-Steckkarte:
  ┌────────────────────────┐
  │  [Flash-Speicher-Chips]│
  │  [Controller]          │
  │  [Gold-Kontakte]       │  ← 76 Pins (PCIe 4.0)
  └────────────────────────┘
           ↓
     Mainboard M.2-Slot
           ↓
     PCIe Lane 3 (direkt zur CPU)
           ↓
   ~7 GB/s Datenrate!
```

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Timer, CMOS & Firmware](./timing-firmware.md)** – Zeitmessung
- Zurück: **[Mainboard](./index.md)**
