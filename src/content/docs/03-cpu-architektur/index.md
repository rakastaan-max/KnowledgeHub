---
title: CPU & Architektur
description: Die innere Struktur und Designphilosophien von Prozessoren
difficulty: intermediate
---

Die **CPU (Central Processing Unit)** ist das "Gehirn" des Computers. In diesem Modul betrachten wir seine **inneren Komponenten** und die **zwei dominierenden Designphilosophien**: RISC und CISC.

## Was ist eine CPU?

Eine CPU ist ein **Mikrochip**, der:
- Programm-Instruktionen aus RAM holt
- Sie interpretiert und dekodiert
- Berechnungen durchführt
- Ergebnisse speichert

**Alles passiert getaktet** – ein externer Taktgeber (Oszillator) synchronisiert alle Operationen.

## Interne Komponenten der CPU

Die moderne CPU besteht aus spezialisierten Einheiten:

| Komponente | Funktion |
|------------|----------|
| **ALU** | Arithmetische + logische Operationen |
| **Control Unit (Steuerwerk)** | Koordiniert den Datenflusses |
| **IDU** | Dekodiert Maschinenbefehle |
| **FPU** | Gleitkomma-Berechnungen (Dezimalzahlen) |
| **Cache** | Schneller Puffer für RAM-Zugriffe |
| **Register** | Ultra-schneller Speicher für aktuelle Daten |

Jede wird in den **[detaillierten Kapitel](./cpu-einheiten.md)** erklärt.

## Die zwei CPU-Architekturen

### 🔴 **CISC** (Complex Instruction Set Computing)
- **Philosophie**: "Wenig, aber mächtige Befehle"
- **Befehlssatz**: Groß (1000+er Befehle)
- **Komplexität**: Hardware-komplex (viele Transistoren)
- **Taktzyklen**: Ein Befehl = mehrere Zyklen
- **Code-Länge**: Kurz (Befehle sind mächtig)
- **Beispiele**: x86 (Intel, AMD)

### 🔵 **RISC** (Reduced Instruction Set Computing)
- **Philosophie**: "Viele einfache Befehle"
- **Befehlssatz**: Klein (50–100 Befehle)
- **Komplexität**: Hardware-einfach
- **Taktzyklen**: Ein Befehl = ca. 1 Zyklus
- **Code-Länge**: Länger (zerlegt Aufgaben)
- **Register**: Viele (50–100 vs. CISC: 8–16)
- **Beispiele**: ARM (Smartphones), MIPS, Power ISA

**Detaillierter Vergleich**: Siehe **[RISC vs. CISC](./risc-vs-cisc.md)**

## CPU-Taktsignal

Das Herz jeder CPU ist der **Takt (Clock)**:

```
Taktgenerator  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  (Quarzoszillator)
                │  │  │  │  │
            ▔▔▔│▔▔│▔▔│▔▔│▔▔│▔▔  Taktpulse
                │  │  │  │  │

Taktrate: z.B. 2 GHz = 2 Milliarden Pulse/Sekunde

Ein Befehl-Zyklus (simplified):
   Zyklus 1: Befehl holen (FETCH)
   Zyklus 2: Dekodieren (DECODE)
   Zyklus 3: Ausführen (EXECUTE)
   (oder bei RISC: alles in 1–2 Zyklen)
```

**Taktfrequenz = Geschwindigkeit** (aber nicht der einzige Faktor!)

## Modulstruktur

Folgende Kapitel vertiefen die CPU-Konzepte:

1. **[CPU-Einheiten](./cpu-einheiten.md)** – ALU, Steuerwerk, IDU, FPU, Cache, Register
2. **[RISC vs. CISC](./risc-vs-cisc.md)** – Designphilosophien & Vergleich
3. **[Cache & Register](./cache-register.md)** – Speicherhierarchie in der CPU

---

### 📖 Weitere Lektüre
- Detailliert: **[CPU-Einheiten](./cpu-einheiten.md)**
- Zurück: **[EVA-Prinzip](../02-eva-prinzip/verarbeitung.md)**
