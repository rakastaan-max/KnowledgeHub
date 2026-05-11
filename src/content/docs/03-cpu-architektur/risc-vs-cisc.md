---
title: RISC vs. CISC
description: Die zwei dominierenden Prozessor-Designphilosophien
difficulty: intermediate
---

**RISC** und **CISC** sind die zwei fundamentalen Ansätze, CPUs zu entwerfen. Diese Philosophien beeinflussen **Hardwarekosten, Leistung und Programmierbarkeit**.

## Überblick

```
┌─────────────┐           ┌────────────────┐
│    CISC     │           │     RISC       │
├─────────────┤           ├────────────────┤
│ Complex Set │ vs.       │ Reduced Set    │
│ Mächtig     │           │ Einfach        │
│ Wenig Code  │           │ Viel Code      │
└─────────────┘           └────────────────┘
```

## CISC (Complex Instruction Set Computing)

### Philosophie
**"Ein starker Befehl ist besser als zehn schwache."**

### Charakteristika

#### 1. **Großer Befehlssatz**
- 1000–3000+ verschiedene Befehle
- Jeder Befehl ist "mächtig" (viele Funktionen in einem)
- **Beispiel**: `MULTIPLY R1, [R2], R3`
  - Multipliziert Inhalt von R1 mit Wert an Adresse R2
  - Speichert Ergebnis in R3
  - Eine Instruktion, viel Arbeit!

#### 2. **Hardware-Komplexität**
- Viele Transistoren nötig (komplexes Steuerwerk, vielen Dekodierungslogik)
- Teuer in Fertigung
- Höhere Leistungsaufnahme
- Schwieriger zu debuggen

#### 3. **Mehrere Taktzyklen pro Befehl**
```
Befehl: MULTIPLY R1, [R2], R3

Zyklus 1: FETCH Befehl
Zyklus 2: DECODE
Zyklus 3: READ R1 + READ from Address R2
Zyklus 4: MULTIPLY (in ALU)
Zyklus 5: WRITE R3
Zyklus 6: UPDATE Flags

Gesamt: 4–6 Zyklen für eine "einfache" Operation
```

#### 4. **Compact Code**
- Wenig RAM nötig (Programme sind klein)
- Weniger Speicherbandbreite nötig
- Ideal für **speicherbegrenzte Systeme** (early Computing)

#### 5. **Adressierungsmodi**
- Viele verschiedene Arten, auf Speicher zuzugreifen
- Direct, Indirect, Indexed, Immediate, etc.
- Flexibel, aber komplex

### Beispiele
- **Intel x86/x64** (PC, Server)
- **AMD x64** (PC, Server)
- **IBM PowerPC** (Mainframe, Embedded)

### Vorteil
✅ Kompakter Code → weniger RAM-Bandbreite → gut für ältere Systeme

### Nachteil
❌ Komplexe Hardware → teuer, heiß, langsam

---

## RISC (Reduced Instruction Set Computing)

### Philosophie
**"Einfache Befehle, die sehr schnell ausgeführt werden."**

### Charakteristika

#### 1. **Kleiner Befehlssatz**
- 50–100 Befehle (vs. CISC: 1000+)
- Jeder Befehl ist "atomar" und einfach
- **Beispiel**: `LOAD R1, [R2]` + `MULTIPLY R1, R3` + `STORE R3, [R4]`
  - Drei Befehle, jeder macht eine Sache
  - Aber: Explizit & einfach zu verstehen

#### 2. **Hardware-Einfachheit**
- Weniger Transistoren (einfaches Steuerwerk)
- Schneller zu designen
- Energieeffizient
- Zuverlässiger

#### 3. **Ein Takt pro Befehl (1:1 Ratio)**
```
Befehl 1: LOAD R1, [R2]
  Zyklus 1: FETCH + DECODE + EXECUTE + STORE

Befehl 2: MULTIPLY R1, R3
  Zyklus 2: FETCH + DECODE + EXECUTE

Befehl 3: STORE R3, [R4]
  Zyklus 3: FETCH + DECODE + EXECUTE

Gesamt: 3 Zyklen für alle 3 Operationen
```

#### 4. **Register-orientiert**
- Viele Register (50–100+)
- Operationen fast nur auf Registern (nicht auf RAM-Adressen)
- Reduziert RAM-Zugriffe → schneller

#### 5. **Load-Store Architektur**
```
Speicher-Zugriffe:   LOAD (RAM → Register) / STORE (Register → RAM)
Operationen:         Nur zwischen Registern
Folge:               RAM-Zugriffe sind explizit & selten
```

#### 6. **Längerer Code**
- Mehr Befehle insgesamt
- Braucht mehr RAM (aber RAM ist billig geworden!)
- Höhere Speicherbandbreite nötig

### Beispiele
- **ARM** (Smartphones, Tablets, Embedded)
- **MIPS** (Embedded, Netzwerkgeräte)
- **RISC-V** (emerging open standard)
- **PowerPC** (manche Varianten)

### Vorteil
✅ Einfache Hardware → schnell, effizient, billig

### Nachteil
❌ Längerer Code → mehr Speicher nötig

---

## Direkter Vergleich

| Aspekt | CISC | RISC |
|--------|------|------|
| **Befehlssatz** | 1000–3000 | 50–100 |
| **Befehle pro Operation** | 1 Befehl | 3–5 Befehle |
| **Takte pro Befehl (CPI)** | 4–6 (durchschnittlich) | 1–2 |
| **Hardware-Komplexität** | Sehr komplex | Einfach |
| **Speicherbandbreite** | Niedrig | Hoch |
| **Code-Größe** | Klein | Groß |
| **Register** | 8–16 | 50–100+ |
| **Kosten** | Teuer | Billig |
| **Leistungsaufnahme** | Hoch | Niedrig |
| **Design-Zeit** | Jahre | Monate |

## Praktisches Szenario: Matrixmultiplikation

### CISC (Intel x86)
```x86 asm
; Berechne A[i,j] * B[i,k]
IMUL EAX, [RBX+RCX*4]   ; 1 Befehl: Read-Multiply-Store
ADD RDX, RAX
LOOP matrix_mult         ; 2 weitere Befehle

Insgesamt: ~10–15 Befehle für Kern-Loop
```

### RISC (ARM)
```arm asm
; Berechne A[i,j] * B[i,k]
LDR R1, [R2, R3, LSL #2]  ; Load
MUL R4, R1, R5            ; Multiply
STR R4, [R6]              ; Store
ADD R3, R3, #1            ; Increment
CMP R3, R7                ; Compare
BNE matrix_mult           ; Branch

Insgesamt: ~15–25 Befehle für gleiche Aufgabe
; Aber: Jeder läuft in 1 Takt!
```

---

## Moderne Hybrid-Ansätze

### Reaissuing CISC-ism
Moderne CPUs kombinieren **das Beste aus beiden Welten**:

**Intel/AMD (x86-64)**
- Externe ISA: CISC (x86)
- Intern: Mikro-Operation-Ebene
- Dekodierung: CISC → 4 µ-Ops (RISC-ähnlich)
- Resultat: CISC-Kompatibilität + RISC-Effizienz

**ARM**
- Moderne ARM-Cores: Mehr Befehle, aber immer noch < 150
- Pipeline: Super-scalar (mehrere Befehle/Zyklus)
- Resultat: "RISC mit CISC-Convenience"

---

## Historischer Kontext

```
1980er: RISC vs. CISC "Wars"
  ├─ RISC Protagonisten: Berkeley, Stanford
  ├─ CISC Befürworter: Intel
  └─ Ergebnis: RISC akademisch dominant, CISC kommerziell dominant

1990er: Miniaturisierung
  └─ RAM → billig & schnell, Transistoren → klein & viele
  └─ CISC verliert größter Vorteil (Code-Kompaktheit)

2000er–2010er: RISC triumphiert (Mobil)
  └─ ARM dominiert Smartphones
  └─ Energieeffizienz > Code-Größe

2020er: Hybrid-Ansätze
  └─ x86-64 nutzt intern RISC-Prinzipien
  └─ ARM nutzt mehr Befehle
  └─ Die Unterschiede werden kleiner
```

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Cache & Register](./cache-register.md)** – Speicher in der CPU
- Zurück: **[CPU-Architektur](./index.md)**
