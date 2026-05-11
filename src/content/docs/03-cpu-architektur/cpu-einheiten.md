---
title: CPU-Einheiten
description: ALU, Steuerwerk, IDU, FPU und ihre Funktionen
difficulty: intermediate
---

Die moderne CPU ist in spezialisierte Funktionseinheiten aufgeteilt. Jede hat eine klar definierte Aufgabe im Verarbeitungsprozess.

## ALU (Arithmetic Logic Unit) – Das Rechenwerk

### Aufgabe
Führt **mathematische und logische Operationen** durch.

### Mathematische Operationen
- **Addition**: 5 + 3 = 8
- **Subtraktion**: 10 – 4 = 6
- **Multiplikation**: 7 × 6 = 42
- **Division**: 20 ÷ 4 = 5

### Logische Operationen (Bitebene)
- **AND**: `1010 AND 1100 = 1000`
- **OR**: `1010 OR 1100 = 1110`
- **NOT**: `NOT 1010 = 0101`
- **XOR**: `1010 XOR 1100 = 0110` (Exklusives Oder)

### Vergleichsoperationen
- **Gleichheit**: `5 == 5 → TRUE`
- **Kleiner/Größer**: `3 < 7 → TRUE`

### Architektur
```
Eingang A ──┐
            ├──[Multiplex]──┐
            │               ├──[ALU-Logik]──► Ergebnis
Eingang B ──┤               │
            │               │
Operand ────┘──[Steuer]─────┘

Ein Befehl definiert die Operation:
  "ADD R1, R2" → ADD-Operation + Eingänge
```

### Leistungsmessung
- **FLOPS** (Floating Point Operations Per Second) für Gleitkomma
- **IOPS** (Integer Operations Per Second) für Ganzzahlen
- Moderner PC: ~10–100 GIPS (Gigainteger-Operationen/Sekunde)

---

## Steuerwerk (Control Unit) – Der Dirigent

### Aufgabe
**Koordiniert und kontrolliert** den gesamten CPU-Ablauf.

### Funktionen
1. **Instruktion holen**: Sagt dem RAM, welchen Befehl zu laden
2. **Instruktion dekodieren**: Arbeitet mit IDU zusammen
3. **Operationen sequenzieren**: In welcher Reihenfolge laufen Schritte ab?
4. **Speicher-Management**: Wann wird RAM gelesen/geschrieben?
5. **Interrupt-Handling**: Reagiert auf externe Signale

### Innere Struktur
```
Steuerwerk:
  - Mikrobefehlspeicher (ROM mit fest verdrahteten Operationsfolgen)
  - Zustandsmaschine (Next-State-Logik)
  - Timing-Circuits (Takt-Synchronisation)
  - Signal-Router (verteilt Befehle an ALU, Cache, RAM)
```

### Beispiel: Befehl "ADD R1, R2"
```
Steuerwerk empfängt Befehlscode: 0x00A20810

1. Dekodierung: "Das ist eine ADD-Operation, Operanden R1 + R2"
2. Signal an ALU: "Bereite ADD vor"
3. Signal an Register: "Lese R1 und R2"
4. Signal an ALU: "Führe ADD aus"
5. Signal an Register: "Speichere Ergebnis in R1"
6. Signal an PC (Program Counter): "Inkrementiere zu nächstem Befehl"
```

---

## IDU (Instruction Decode Unit) – Der Übersetzer

### Aufgabe
**Übersetzt** maschinenlesbaren Befehlscode in interne Mikro-Instruktionen.

### Der Prozess
```
Rohbefehl (Maschinencode):
  10110101 11001110 01010101
  (6–15 Byte, je nach ISA)
  
IDU dekodiert (unter Nutzung interner ROM):
  - Operationscode: ADD (10110)
  - Register-Adressen: R1 (101), R2 (110)
  - Modifizierer: (01010101)
  
Resultat: Mikro-Instruktionen an Steuerwerk
  μ-Instr 1: "Hole R1 aus Register-Datei"
  μ-Instr 2: "Hole R2 aus Register-Datei"
  μ-Instr 3: "Führe ADD durch"
  μ-Instr 4: "Speichere Ergebnis"
```

### Warum ist das nötig?
- **CISC**: Ein Befehl = mehrere μ-Instruktionen (dafür wenig Code)
- **RISC**: Ein Befehl ≈ 1 μ-Instruktion (dafür mehr Code)

### Technologie
- Modernes CISC (Intel): 4 μ-Instrumente pro Befehl (durchschnittlich)
- Modernes RISC (ARM): 1 μ-Instruktion pro Befehl

---

## FPU (Floating Point Unit) – Der Dezimal-Spezialist

### Aufgabe
Führt **Gleitkomma-Berechnungen** durch (Dezimalzahlen).

### Mathematische Fähigkeiten
- Operationen mit reellen Zahlen: `3.14159 × 2.71828`
- Wissenschaftliche Notation: `1.5e–10` (Exponent)
- Trigonometrische Funktionen: sin(), cos(), tan()
- Logarithmen, Exponentiale

### IEEE 754 Standard (Gleitkomma-Format)
```
32-Bit (Single Precision):
┌─┬────────┬──────────────────────┐
│S│Exponent│   Mantisse           │
│1│  8 Bit  │  23 Bit              │
└─┴────────┴──────────────────────┘

Beispiel: 3.14 ≈ 0 10000000 10010001111010111000011
           (+ 2^0 × 1.570796...)
```

### Performance
- **FLOPS** (Floating Point Operations Per Second)
- Moderner PC-CPU: ~10–50 GFLOPS
- GPU: ~1–10 TFLOPS (Millionen mal schneller!)

### Einsatzbereiche
- Wissenschaftliche Berechnungen (Physik, Chemie)
- 3D-Grafik (alle Koordinaten sind Floats)
- Audio/Video (Dezimal-Werte für Sampling)
- Machine Learning (neuronale Netzwerke)

---

## Cache – Der intelligente Puffer

### Aufgabe
Reduziert Latenzzeit beim RAM-Zugriff.

### Prinzip
```
CPU braucht Daten:
  ├─ Zuerst: Checke L1 Cache (schnell, klein)
  ├─ Nicht da? Checke L2 Cache (größer, langsamer)
  ├─ Nicht da? Checke L3 Cache (noch größer)
  └─ Nicht da? Lies aus RAM (sehr langsam ~ 100 ns)
```

### Größen
| Cache | Größe | Zugriffszeit | Lage |
|-------|-------|---|---|
| **L1** | 32–64 KB | 4 ns | Pro Core |
| **L2** | 256 KB–1 MB | 12 ns | Pro Core |
| **L3** | 4–12 MB | 40 ns | Gemeinsam |
| **RAM** | 4–64 GB | 100 ns | Extern |

### Cache-Strategie
- **Spatial Locality**: Wenn Adresse X gelesen wird, sind X+1, X+2, … wahrscheinlich nächst
- **Temporal Locality**: Daten werden oft mehrfach hintereinander gelesen
- **Cache-Line**: 64 Bytes werden zusammen geladen

---

## Register – Ultra-schneller Speicher

### Aufgabe
Speichert **aktuelle Operanden und Zwischenergebnisse** direkt in der CPU.

### Größe & Anzahl
- **32-Bit CPU**: 8–16 Register à 32 Bit
- **64-Bit CPU**: 16–32 Register à 64 Bit
- **RISC**: 50–100+ Register
- **CISC**: 8–16 Register

### Typen
| Typ | Zweck |
|-----|-------|
| **General Purpose** | Beliebige Daten |
| **Program Counter (PC)** | Adresse nächster Befehl |
| **Stack Pointer (SP)** | Adresse des Stack-Tops |
| **Status Register (FLAGS)** | Carry, Zero, Sign (Befehlsergebnisse) |

### Beispiel (x86-64)
```
General Purpose:
  RAX, RBX, RCX, RDX (8–64 Bit)
  RSI, RDI, RBP, RSP (Index, Base, Stack Pointer)

Spezial:
  RIP (Instruction Pointer = PC)
  RFLAGS (Status-Flags)
```

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[RISC vs. CISC](./risc-vs-cisc.md)** – Designphilosophien
- Zurück: **[CPU-Architektur](./index.md)**
