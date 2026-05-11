---
title: Speicherhierarchie
description: Gesamtüberblick der Speichersysteme von der CPU bis zur Festplatte
difficulty: intermediate
---

Die **Speicherhierarchie** ist das Design-Prinzip, das Performance optimiert. Je näher ein Speicher zur CPU, desto schneller – aber auch kleiner und teurer.

## Die komplette Hierarchie

```
           Geschwindigkeit (↑)     Kapazität (↓)
                   ↑                     ↓
           ┌────────────────┐    ┌─────────────┐
       0ns │   CPU Register │ 1 KB           │
        4ns│   L1I/L1D Cache│ 32–64 KB       │
       12ns│   L2 Cache     │ 256 KB–1 MB    │
       40ns│   L3 Cache     │ 4–12 MB        │
      100ns│   RAM (DDR4/5) │ 4–128 GB       │
     1000ns│   SSD (NVMe)   │ 256 GB–2 TB    │
   10000ns│   HDD          │ 1–12 TB        │
           │ Archiv/Cloud   │ ∞ GB           │
           └────────────────┘    └─────────────┘
                ↓                      ↓
           Schnell, teuer         Langsam, billig
```

## Ebenen der Hierarchie

### **Ebene 1: CPU-Register**
- Größe: ~32 KB (alle Register zusammen)
- Zugriffszeit: 0–2 ns
- Technologie: SRAM (Static RAM)
- Verwaltung: Compiler & Hardware

### **Ebene 2: CPU-Cache (L1, L2, L3)**
- Größe: 32 KB–12 MB
- Zugriffszeit: 4–40 ns
- Technologie: SRAM (Static RAM)
- Verwaltung: Cache Controller (automatisch)
- Charakteristika:
  - Cache ist **transparent** für Programm
  - Hit → sehr schnell (4 ns)
  - Miss → Fallback to L2/L3/RAM (40–100 ns)

### **Ebene 3: RAM (Hauptspeicher)**
- Größe: 4–128 GB
- Zugriffszeit: 100 ns (~ 100 CPU-Zyklen!)
- Technologie: DRAM (Dynamic RAM)
- Verwaltung: Memory Controller (in CPU modern)
- Charakteristika:
  - Flüchtig (verliert Daten beim Ausschalten)
  - Alle laufenden Programme sitzen hier
  - Virtual Memory: OS kann zu SSD auslagern

### **Ebene 4: SSD (Solid State Drive)**
- Größe: 256 GB–2 TB
- Zugriffszeit: 1–10 µs (1000 ns!)
- Technologie: NAND Flash
- Verwaltung: OS (Storage Management)
- Charakteristika:
  - Dauerhaft speichert Daten
  - Sehr schnell (aber 100× langsamer als RAM)
  - Begrenzte Schreib-Zyklen

### **Ebene 5: HDD (Hard Disk Drive)**
- Größe: 1–12 TB
- Zugriffszeit: 10–20 ms (10.000.000 ns!)
- Technologie: Magnetische Rotation
- Verwaltung: OS (Storage Management)
- Charakteristika:
  - Dauerhaft, sehr günstig
  - Sehr langsam (mechanische Bewegung)
  - Unbegrenzte Schreib-Zyklen

---

## Datenfluss im Speichersystem

### Szenario: Dateiöffnen & Bearbeiten (z.B. Textdatei)

```
Phase 1: PROGRAM START
  HDD [Datei]
    ↓
  OS: "Lade Datei"
    ↓
  SSD/HDD → RAM (Datei geladen, z.B. 1 MB)
    ↓
  RAM: Datei-Buffer bereit

Phase 2: USER BEARBEITET TEXT
  CPU braucht: 1. Zeichen (Offset 0)
    ↓
  L1 Cache: Miss
    ↓
  L2 Cache: Miss
    ↓
  L3 Cache: Miss
    ↓
  RAM: Hit! (Zeichen von 0x7FFF0000)
  Cache-Line wird geladen (64 Bytes)
    ↓
  L1D Cache speichert Block
    ↓
  CPU erhält Zeichen (4 ns nächstes Mal)

Phase 3: SCROLL ODER NÄCHSTE SEITE
  CPU braucht: Zeichen bei Offset 10.000
    ↓
  Cache-Hit Wahrscheinlichkeit: ~70% (Spatial Locality)
  Oder:
  Cache-Miss → RAM-Zugriff (100 ns)

Phase 4: USER SPEICHERT
  RAM → SSD (1 MB schreiben, ~10 ms)
  oder
  RAM → HDD (1 MB schreiben, ~50 ms, langsamer)
    ↓
  "Datei gespeichert" Dialog
```

---

## Performance-Auswirkungen

### Zugriffszeit-Analogie (Skalierung × 1 Mrd)

```
1 Taktzyklus (CPU @ 1 GHz)         1 Sekunde
   ↓                                    ↓

L1 Cache Hit (4 ns)              ≈ 4 Sekunden
L2 Cache Hit (12 ns)             ≈ 12 Sekunden
L3 Cache Hit (40 ns)             ≈ 40 Sekunden
RAM Hit (100 ns)                 ≈ 100 Sekunden (~1-2 Min)
SSD Hit (1 µs)                   ≈ 17 Minuten
HDD Hit (10 ms)                  ≈ 3 Tage
Cloud/Network (100 ms)           ≈ 30 Tage
```

**Erkenntnis**: RAM-Zugriff ist bereits extrem langsam aus CPU-Perspektive!

---

## Speicher-Management im OS

### Virtual Memory (Paging)
```
Programm fragt nach Speicher, der nicht im RAM ist:

CPU braucht: Adresse 0x90000000 (nicht im RAM)
  ↓
CPU wirft Page Fault Exception
  ↓
OS handelt:
  "Finde Seite auf SSD"
    ↓
  Lade Seite (4 KB) von SSD → RAM
    ↓
  Andere alte Seite wird auf SSD ausgelagert (Swapping)
  ↓
  CPU versucht erneut: Jetzt im RAM ✓

Resultat: Benutzbar mehr RAM als physikalisch vorhanden
           (Preis: Sehr langsam bei Swaps!)
```

### Speichertypen in OS

| Typ | Ort | Charakteristika |
|-----|-----|---|
| **Stack** | RAM | Automatisch, schnell |
| **Heap** | RAM | Dynamisch, kann fragmentieren |
| **Page File** | SSD/HDD | Virtual Memory bei RAM-Überlauf |
| **Festplatte** | SSD/HDD | Programme & Daten persistent |

---

## Speicher-Optimierung für Entwickler

### Best Practices

#### **1. Spatial Locality**
```c
// Gut: Sequential Access
for (int i = 0; i < N; i++) {
  process(array[i]);  // Speicher adressiert hintereinander
}

// Schlecht: Random Access
int indices[1000] = { random shuffled indices };
for (int i = 0; i < 1000; i++) {
  process(array[indices[i]]);  // Springt überall hin
}
```

#### **2. Temporal Locality**
```c
// Gut: Häufig benötigte Werte in Registern halten
int sum = 0;
for (int i = 0; i < N; i++) {
  sum += array[i];  // sum bleibt im Register
}

// Schlecht: Global zugreifen
// (würde in Memory gehen, viel Latenz)
```

#### **3. Cache-Aware Größen**
```c
// Wissen über Cache-Größe:
// L1D: 32 KB, L2: 256 KB, L3: 8 MB

// Zugeschnitten auf L1:
#define WORK_SIZE 8000  // < 32 KB

for (int i = 0; i < WORK_SIZE; i++) {
  // Arbeitet komplett in L1 Cache
}
```

---

## Speicherhierarchie-Mythen

### Mythos 1: "Mehr RAM = Immer schneller"
**Wahrheit**: 
- Mehr RAM hilft bei Virtual Memory (Swapping)
- Aber 100 GB RAM bei Zugriff auf 1 MB ist kein Vorteil
- Speicher in der Nähe wichtiger als Größe

### Mythos 2: "Alle CPU Zyklen sind gleich"
**Wahrheit**:
- Cache Hit: 4 Takte
- RAM Hit: 100 Takte
- HDD Hit: 10.000.000 Takte
- Gigantische Unterschiede!

### Mythos 3: "SSD ist so schnell wie RAM"
**Wahrheit**:
- SSD: ~1 µs pro 4 KB Seite = 250 MB/s
- RAM: ~100 ns pro 64 Bytes = 600 GB/s
- RAM ist >1000× schneller!

---

### 📖 Weitere Lektüre
- Zurück: **[Chipsatz-Evolution](./chipsatz-evolution.md)**
- Nächstes Modul: **[Glossar](../05-glossar/index.md)**
