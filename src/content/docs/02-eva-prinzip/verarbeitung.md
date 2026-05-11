---
title: Verarbeitung (V)
description: CPU und die Verarbeitungslogik
difficulty: intermediate
---

Die **Verarbeitung** ist das **Herz** des EVA-Modells. Sie nimmt digitale Eingabedaten, führt Operationen nach Programm-Instruktionen durch und bereitet Ausgabedaten vor.

## Hardware der Verarbeitung

### 🧠 **Prozessor (CPU)**
Die **Central Processing Unit** ist der Primärakteur:

- **Aufgabe**: Führt Programm-Instruktionen sequenziell aus
- **Geschwindigkeit**: Gemessen in **Gigahertz (GHz)**
  - 1 GHz = 1 Milliarde Takte pro Sekunde
  - Moderner PC: 2–5 GHz
  - Supercomputer: 10+ GHz (mit extremer Kühlung)
- **Kernanzahl**: Modern meist **4–8 Kerne** (Multi-Core)
  - Jeder Kern kann eine Instruktion parallel verarbeiten
- **Befehle**: Nur ca. 100–1000 elementare Operationen (je nach Architektur)

### 🔧 **Chipsatz (Chipset)**
Koordiniert Kommunikation zwischen CPU und Speicher/Peripherie:

- **Northbridge** (Legacy): Schnelle Verbindung zu RAM & GPU
- **Southbridge** (Legacy): Langsamere Verbindung zu USB, SATA, etc.
- **Modern (PCH)**: Ein-Chip-Lösung (Platform Controller Hub)

### 💾 **RAM (Arbeitsspeicher)**
Kritisch für Verarbeitung:

- **Funktion**: Speichert aktuelle **Operanden und Zwischenergebnisse**
- **Geschwindigkeit**: Sehr schnell (ca. 50 ns Zugriffszeit)
- **Größe**: 4–64 GB in modernen PCs
- **Flüchtig**: Verliert Daten beim Ausschalten

### ⚡ **GPU (Graphics Processing Unit)**
Spezialisierter Prozessor für Parallelverarbeitung:

- **Ursprüngliche Aufgabe**: Grafik-Rendering
- **Modern**: Auch für KI, Kryptographie, wissenschaftliche Berechnungen
- **Tausende kleine Kerne** statt wenige starke Kerne (CPU-Prinzip)
- **Massiv parallel**: Verarbeitet Millionen Operationen gleichzeitig

## Der Verarbeitungsprozess (Fetch-Decode-Execute-Cycle)

Die CPU folgt immer diesem Schema:

```
┌──────────────────────────────────────────────┐
│              CPU-ZYKLUS                      │
└──────────────────────────────────────────────┘

1. FETCH (Befehl holen)
   └─ CPU liest nächste Instruktion aus RAM/Cache
   
2. DECODE (Befehl dekodieren)
   └─ Steuerwerk interpretiert Instruktion
   └─ Beispiel: "ADD R1, R2" → Addiere Register 1 + 2
   
3. EXECUTE (Ausführen)
   └─ ALU führt Berechnung durch
   └─ Ergebnis: 5 + 3 = 8
   
4. STORE (Ergebnis speichern)
   └─ Ergebnis zurück in Register oder RAM

   └─ Nächster Zyklus beginnt
```

**Taktrate**: Bei 2 GHz = 2 Milliarden Zyklen pro Sekunde!

## Interne CPU-Einheiten (vorab, detailliert in CPU-Modul)

| Einheit | Aufgabe |
|---------|---------|
| **ALU** (Arithmetic Logic Unit) | Mathematische Operationen (+ – × ÷) & Logik (AND, OR, NOT) |
| **Control Unit** (Steuerwerk) | Koordiniert Ablauf, interpretiert Befehle |
| **IDU** (Instruction Decode Unit) | Übersetzt Befehle in Mikro-Instruktionen |
| **FPU** (Floating Point Unit) | Dezimalzahl-Berechnungen (komplexe Mathematik) |
| **Registers** | Ultra-schnelle Speicher direkt in CPU für Zwischenergebnisse |
| **Cache** | Schneller Puffer (L1, L2, L3) zwischen CPU und RAM |

## Verarbeitungslogik: Programmfluss

Der Computer führt **niemals eigenmächtig** etwas aus. Alles folgt einem **Programm**:

```
┌─────────────────────────────────────────┐
│        PROGRAM (im RAM gespeichert)     │
│                                         │
│  1. Lese Wert von Input-Adresse         │
│  2. Multipliziere mit 2                 │
│  3. Speichere in Variable X             │
│  4. Wenn X > 100, gehe zu Schritt 6     │
│  5. Addiere 10 zu X, gehe zu Schritt 3  │
│  6. Schreibe X auf Output               │
│  7. ENDE                                │
└─────────────────────────────────────────┘

CPU führt diese Schritte nacheinander aus (oder parallel bei Multi-Core)
```

## Beispiel: Taschenrechner (25 + 17)

```
RAM enthält Programm:
  MOV R1, 25      ← Lade 25 in Register 1
  MOV R2, 17      ← Lade 17 in Register 2
  ADD R1, R2      ← Addiere → Ergebnis in R1 (= 42)
  STORE 42, OUTPUT ← Schreibe 42 an Output-Adresse

CPU-Ausführung:
  
  Zyklus 1: FETCH "MOV R1, 25"
            DECODE → Lade-Befehl
            EXECUTE → R1 := 25
  
  Zyklus 2: FETCH "MOV R2, 17"
            DECODE → Lade-Befehl
            EXECUTE → R2 := 17
  
  Zyklus 3: FETCH "ADD R1, R2"
            DECODE → Arithmetik-Befehl
            EXECUTE (ALU) → 25 + 17 = 42
            STORE → R1 := 42
  
  Zyklus 4: FETCH "STORE 42, OUTPUT"
            EXECUTE → Schreibe 42 an Ausgabe
  
Output: 42 ✓
```

## Performance-Faktoren

**Warum sind einige Computer schneller als andere?**

| Faktor | Einfluss |
|--------|----------|
| **Taktrate (GHz)** | Höher = schneller (einfach, aber nicht alles) |
| **Kerne** | Mehr Kerne = bessere Multi-Task-Performance |
| **Cache-Größe** | Mehr Cache = weniger langsame RAM-Zugriffe |
| **Speicher (RAM)** | Mehr RAM = weniger Auslagerung auf Festplatte |
| **Architektur** | RISC/CISC, Instruction-Set, Pipelining |
| **Effizienz** | Weniger Takte pro Instruktion = schneller |

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Speicherung](./speicherung.md)** – RAM, HDD, SSD
- Zurück: **[EVA-Übersicht](./index.md)**
- Tiefere CPU-Details: **[CPU & Architektur](../03-cpu-architektur/index.md)** Modul
