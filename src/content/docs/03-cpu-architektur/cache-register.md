---
title: Cache & Register
description: Die Speicherhierarchie im Prozessor
difficulty: intermediate
---

**Register** und **Cache** sind essenzielle Komponenten für CPU-Performance. Sie bilden die **Speicherhierarchie** zwischen der CPU und dem langsameren RAM.

## Register – Ultra-schnelle CPU-interne Speicher

### Definition
**Register** sind kleine, extrem schnelle Speicherzellen **direkt auf dem CPU-Chip**.

### Eigenschaften

#### Geschwindigkeit
- **Zugriffszeit**: 0–2 ns (Nanosekunden!)
- **Warum so schnell?**: Keine physikalische Entfernung; nur wenige Transistoren
- **Vergleich**:
  - Register: 0–2 ns
  - L1 Cache: 4 ns
  - RAM: 100 ns
  - SSD: 1.000.000 ns

#### Größe
- **Pro Register**: 32–64 Bit (4–8 Bytes)
- **Gesamt pro CPU**:
  - x86 (CISC): ~16 Kilobytes Register (16 Stück à 64 Bit)
  - ARM (RISC): ~50–100 Kilobytes Register (viele Stück)

#### Quantität
- **CISC**: 8–16 Register (Engpass – Compiler muss umschreiben)
- **RISC**: 50–100+ Register (viel mehr Platz für Zwischenergebnisse)

### Registertypen (x86-64 Beispiel)

#### **General Purpose Registers (GPR)**
```
64-Bit Namen:  RAX, RBX, RCX, RDX
               RSI, RDI, RBP, RSP
               R8–R15

32-Bit Alias:  EAX, EBX, ECX, EDX (usw.)
16-Bit Alias:  AX, BX, CX, DX
8-Bit Alias:   AL, AH, BL, BH (usw.)
```

Beispiel: RAX (64-Bit) enthält auch:
```
RAX:  ┌─────────────────────────────────────┐
      │ 64 Bits                             │
      └─────────────────────────────────────┘
EAX:              ┌─────────────────────────┐
                  │ 32 Bits                 │
                  └─────────────────────────┘
AX:                           ┌─────────────┐
                              │ 16 Bits     │
                              └─────────────┘
AL:                                   ┌─────┐
                                      │8 Bits
                                      └─────┘
```

#### **Spezial-Register**

| Register | Zweck |
|----------|-------|
| **RIP (Instruction Pointer)** | Adresse der nächsten Instruktion |
| **RSP (Stack Pointer)** | Adresse des Stack-Tops |
| **RBP (Base Pointer)** | Basisadresse des Stack-Frames (Variablen) |
| **RFLAGS** | Status-Flags (Carry, Zero, Sign, Overflow) |

### Register-Verwendung in der Praxis

```c
// C-Code:
int a = 5;
int b = 3;
int result = a + b;

// Wird zu Assembler:
MOV RAX, 5      ; R1 = 5 (Register A)
MOV RBX, 3      ; R2 = 3 (Register B)
ADD RAX, RBX    ; R1 = R1 + R2
MOV RCX, RAX    ; R3 = R1 (result)
```

**Alles läuft in Registern ab – sehr schnell!**

---

## Cache – Der intelligente RAM-Puffer

### Definition
**Cache** ist schneller Speicher, der häufig benötigte Daten vom langsamen RAM speichert.

### Warum Cache?
```
Problem: RAM ist LANGSAM (100 ns)
Lösung: Cache ist ein Puffer (4–40 ns)
Strategie: Daten, die CPU wahrscheinlich braucht, schon mal voraus-laden
```

### Cache-Hierarchie

```
CPU
 │
 ├─ L1 Cache (32–64 KB)     ← Schnell, klein, pro Core
 │  └─ L1I Cache (Instruktionen)
 │  └─ L1D Cache (Daten)
 │
 ├─ L2 Cache (256 KB–1 MB)  ← Mittel, pro Core
 │
 ├─ L3 Cache (4–12 MB)      ← Langsam, aber größer, geteilt
 │
 └─ RAM (4–64 GB)           ← Sehr langsam, aber riesig
```

### Cache-Performance

| Level | Größe | Zugriffszeit | Hit-Rate* |
|-------|-------|---|---|
| **L1** | 32 KB | 4 ns | ~95% |
| **L2** | 256 KB | 12 ns | ~90% |
| **L3** | 8 MB | 40 ns | ~70% |
| **RAM** | 8 GB | 100 ns | 100% (fallback) |

*Hit-Rate = Prozentsatz der Zugriffe, die im Cache gefunden werden

### Wie funktioniert Cache?

```
CPU braucht Wert von Adresse 0x1000:

Step 1: Checke L1 Cache
  ├─ Cache-Tag: 0x10
  ├─ Cached? JA! → 4 ns
  └─ Hit! Rückgabe

CPU braucht Wert von Adresse 0x5000:

Step 1: Checke L1 Cache
  ├─ Adresse 0x50 nicht im Cache
  └─ MISS!

Step 2: Checke L2 Cache
  ├─ Adresse 0x50 nicht im Cache
  └─ MISS!

Step 3: Checke L3 Cache
  ├─ Adresse 0x50 nicht im Cache
  └─ MISS!

Step 4: Lade aus RAM (100 ns)
  ├─ Datei: 0x5000 wird gelesen
  ├─ Zugleich: Umgebung 0x4FF0–0x502F wird
     auch geladen (spatial locality)
  ├─ Speichere in L3
  └─ Copy nach L2 & L1
```

### Cache-Konzepte

#### **Cache-Line**
- Einheit, die Cache speichert
- Standard: 64 Bytes
- Wenn Sie 1 Byte brauchen, werden automatisch 64 Bytes geladen
- **Warum?**: Spatial Locality (benachbarte Daten sind oft nächstes nötig)

#### **Temporal Locality**
- Daten, die gerade verwendet wurden, sind wahrscheinlich bald wieder nötig
- **Beispiel**: Loop-Variable wird 1000× hintereinander gelesen
- **Cache-Vorteil**: Bleibt im L1, 1000× in 4 ns statt 100 ns

#### **Spatial Locality**
- Daten nahe beieinander werden oft zusammen gelesen
- **Beispiel**: Array-Iteration `for (int i = 0; i < N; i++) sum += array[i]`
- **Cache-Vorteil**: Cache-Line mit 16 Array-Elementen auf einmal geladen

#### **Cache-Replacement (Eviction)**
Wenn Cache voll → älteste/am wenigsten benutzte Daten löschen (LRU – Least Recently Used)

### Cache-Typ

#### **Instruction Cache (L1I)**
- Speichert **Programm-Befehle**
- Separate Struktur von Data-Cache
- Größe: ~32 KB typischerweise

#### **Data Cache (L1D)**
- Speichert **Operanden & Ergebnisse**
- Separate von Instruction-Cache
- Größe: ~32 KB typischerweise

#### **Unified Cache (L2, L3)**
- Speichert sowohl Befehle als auch Daten
- Einfacher zu handhaben

---

## Register vs. Cache – Vergleich

| Aspekt | Register | Cache |
|--------|----------|-------|
| **Ort** | Auf CPU-Chip | Auf CPU-Chip |
| **Größe** | KBs | MBs |
| **Zugriffszeit** | 0–2 ns | 4–40 ns |
| **Verwaltung** | Manuell (Compiler) | Automatisch (Hardware) |
| **Hit-Rate** | 100% (definiert) | 90–95% |
| **Kosten** | Sehr teuer | Teuer |
| **Macht** | Direkt | Transparent |

---

## Performance-Optimierung

### Gute Cache-Nutzung
```c
// Gut: Spatial Locality
for (int i = 0; i < N; i++) {
  sum += array[i];  // Sequential access
}

// Schlecht: Cache Misses
for (int i = 0; i < N; i += 1000) {
  sum += array[i];  // Springt überall hin
}
```

### Register-Optimierung
- Häufig-benutzte Variablen als Register speichern
- Compiler macht das automatisch (`register` keyword in C)
- Moderne Compiler sind sehr gut darin

### Cache-Thrashing (Gegenteil)
- Wenn Program zwischen verschiedenen Speicherbereichen springt
- Cache-Misses stapeln sich
- Performance bricht ein
- Beispiel: Unsortiertes Array durchsuchen vs. sortiertes

---

### 📖 Weitere Lektüre
- Zurück: **[RISC vs. CISC](./risc-vs-cisc.md)**
- Nächstes Modul: **[Mainboard & Chipsatz](../04-mainboard-chipsatz/index.md)**
