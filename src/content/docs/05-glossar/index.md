---
title: Glossar & Selbstkontrolle
description: Wichtige Fachbegriffe aus der IT-Hardware Ausbildung
---

Nutze dieses Glossar zur **Überprüfung deines Wissens**. Die Definitionen sind prüfungsgerecht formuliert und orientieren sich an den Themen dieses Hubs.

## A

**ADC (Analog-Digital-Converter)**
Hardware-Modul, das analoge Signale in digitale Bits umwandelt. Beispiel: Mikrofon-Eingang wird zu digitalen Audiodaten.

**ALU (Arithmetic Logic Unit)**
Das "Rechenwerk" der CPU. Führt arithmetische Operationen (Add, Sub, Mul, Div) und logische Operationen (AND, OR, NOT) durch.

## B

**BIOS (Basic Input/Output System)**
Veralte Firmware-Standard für Computer-Boot. Wird durch UEFI ersetzt. Speichert in Flash-EEPROM auf Mainboard.

**Bus**
Parallele oder serielle Leitungen zum Datentransport zwischen Komponenten. Beispiele: FSB, DMI, PCI-Express, SATA.

## C

**Cache (L1, L2, L3)**
Schneller Speicher zwischen CPU und RAM. Speichert häufig benötigte Daten. L1 (32 KB, 4 ns) → L2 (256 KB, 12 ns) → L3 (8 MB, 40 ns).

**Chipsatz**
Leitungsmanagement-System auf Mainboard. Lenkt Daten zwischen CPU, RAM und Peripherie. Modern: PCH (Platform Controller Hub).

**CISC (Complex Instruction Set Computing)**
CPU-Designphilosophie mit großem Befehlssatz (~1000+). Wenig Code, aber mehrere Takte pro Befehl. Beispiel: Intel x86-64.

**Clock Skew**
Zeitversatz bei Signalen auf parallelen Leiterbahnen bei hohen Frequenzen. Gelöst durch Meander-Layout.

**CMOS (Complementary Metal-Oxide-Semiconductor)**
Speicher-Technologie, auch Referenz für CMOS-RAM (mit Batterie gepuffert) auf Mainboard, das Uhrzeit & BIOS-Settings speichert.

## D

**DAC (Digital-Analog-Converter)**
Hardware-Modul, das digitale Bits zurück zu analogen Signalen konvertiert. Beispiel: Audiodaten → Lautsprecher.

**DDR (Double Data Rate)**
RAM-Technologie, die Daten zweimal pro Taktzyklus überträgt (DDR3, DDR4, DDR5 mit zunehmenden Geschwindigkeiten).

**DRAM (Dynamic RAM)**
Speichertechnologie mit Kondensatoren, die ständig aufgefrischt werden müssen. Standard in Arbeitsspeicher (RAM).

**DMI (Direct Media Interface)**
Schnelle Verbindung zwischen CPU und PCH. Ersetzt alte FSB-Verbindung. Moderne Versionen: DMI 2.0 (2.5 GB/s), DMI 3.0 (8 GB/s).

## E

**EEPROM (Electrically Erasable Programmable ROM)**
Speichertyp, der gelöscht und neu programmiert werden kann. Nutzt Flash-Technologie. Speichert Firmware (BIOS/UEFI).

**EVA-Prinzip**
Grundschema: Eingabe → Verarbeitung → Ausgabe. Basis aller IT-Systeme.

## F

**Flash-EEPROM**
Nicht-flüchtiger Speicher für BIOS/UEFI-Firmware. Größe modern: 256 MB–512 MB. Haltbarkeit: 10.000–100.000 Schreib-Zyklen.

**FLOPS (Floating Point Operations Per Second)**
Leistungsmaß für Gleitkomma-Berechnungen. Skalierung: MFLOPS (10⁶), GFLOPS (10⁹), TFLOPS (10¹²), PFLOPS (10¹⁵).

**FPU (Floating Point Unit)**
Spezialisierte CPU-Einheit für Dezimalzahl-Berechnungen (Floats). Essentiell für Grafik, Wissenschaft, KI.

**FSB (Front Side Bus)**
Veraltete Verbindung zwischen CPU und Northbridge (1995–2015). Frequenz: 400–1600 MHz. Problem: War Bottleneck.

## G

**GPU (Graphics Processing Unit)**
Spezialisierter Prozessor für Grafik-Rendering. Modern: auch für KI, Kryptographie, wissenschaftliche Simulationen. Massiv parallel (Tausende Kerne).

**GPT (GUID Partition Table)**
Modernes Partitionierungssystem für Festplatten. Unterstützt Partitionen >2 TB. Ersetzt alte MBR.

## H

**HDD (Hard Disk Drive)**
Traditionelle Festplatte mit rotierender magnetischer Scheibe. Zugriffszeit: ~10–20 ms. Preiswert, aber langsam.

## I

**IDU (Instruction Decode Unit)**
CPU-Einheit, die Maschinenbefehle in interne Mikro-Instruktionen dekodiert. Essentiell für CISC-Architektur.

**ISA (Instruction Set Architecture)**
Definition aller Befehle, die ein Prozessor verstehen kann. Beispiele: x86-64, ARM, MIPS, RISC-V.

## L

**Leiterbahn (Trace)**
Kupferverbindung auf PCB (Mainboard). Befördert Signale zwischen Komponenten. Breite: 50–500 µm.

## M

**Mainframe**
Großrechner für Massendatenverarbeitung (Banken, Versicherungen). Multi-User, extrem zuverlässig, sehr teuer.

**MBR (Master Boot Record)**
Alte Partitionierungsmethode. Limit: 4 primäre Partitionen, max. 2 TB pro Platte. Veraltet (ersetzt durch GPT).

**Meander**
Absichtlich geschlängelte Leiterbahn zur Anpassung von Signallaufzeiten. Reduziert Clock Skew auf Mainboard.

**Memory Hierarchy / Speicherhierarchie**
Struktur aus mehreren Speicherschichten (Register → Cache → RAM → SSD → HDD), je näher CPU = schneller aber kleiner.

## N

**Northbridge (MCH)**
Legacy Chipsatz-Komponente (1995–2015). Verwaltete schnelle Anbindung (RAM, GPU). Wurde in moderne CPUs integriert.

**NVMe (Non-Volatile Memory Express)**
Protokoll für schnelle SSDs über M.2-Steckkarte & PCIe. Geschwindigkeit: bis 7 GB/s (PCIe 4.0).

## P

**PCB (Printed Circuit Board)**
Mainboard – die physikalische Platine mit Kupferleiterbahnen und Komponenten-Positionen.

**PCH (Platform Controller Hub)**
Moderner Ersatz für Southbridge. Ein-Chip-Lösung mit USB, SATA, Audio, Netzwerk. Verbunden via DMI zur CPU.

**PCIe (PCI Express)**
Hochgeschwindigkeit-Bus für Erweiterungskarten (GPUs, SSDs, Netzwerk-Adapter). Generationen: PCIe 3.0 (16 GB/s), 4.0 (32 GB/s), 5.0 (64 GB/s).

**Register**
Ultra-schnelle Speicherzellen direkt auf CPU-Chip. Größe: 32–64 Bit. Zugriffszeit: 0–2 ns. CISC: 8–16 Register, RISC: 50–100+.

**RISC (Reduced Instruction Set Computing)**
CPU-Designphilosophie mit kleinem Befehlssatz (~50–100). Einfache Befehle, ~1 Taktzyklus pro Befehl. Beispiel: ARM, MIPS.

**ROM (Read-Only Memory)**
Speicher, der nur gelesen, nicht geschrieben werden kann. Veraltet für allgemeine Nutzung. Modern: Flash-EEPROM stattdessen.

**RTC (Real-Time Clock)**
Register auf Mainboard, das Datum & Uhrzeit speichert. Wird von CMOS-Batterie versorgt.

## S

**SSD (Solid State Drive)**
Moderne Festplatte mit Flash-Speicher (elektronisch). Zugriffszeit: ~1 µs. Schnell, zuverlässig, teuer.

**SRAM (Static RAM)**
Speichertechnologie mit Flipflops, keine Auffrischung nötig. Verwendet in CPU-Caches & Registern. Schnell, teuer.

## T

**Terminal**
Legacy-Konzept: Reine Ein-/Ausgabe-Station ohne eigene Rechenleistung. Alle Berechnungen auf Zentralrechner. Modern: Thin Client.

**Trace / Leiterbahn**
Siehe: Leiterbahn.

## U

**UEFI (Unified Extensible Firmware Interface)**
Moderner Firmware-Standard, Ersatz für BIOS. Unterstützt großer Festplatten (GPT), Secure Boot, Grafik. Standard seit ~2012.

## V

**VRM (Voltage Regulator Module)**
Elektronische Schaltung auf Mainboard, die Stromspannung regelt (z.B. 12V → 1,2V für CPU).

## W

**WRAM (Windows RAM)**
Veraltete RAM-Variante aus den 1990ern, heute nur noch Nische.

---

## Checkliste: Haben Sie verstanden?

### Grundlagen
- [ ] EVA-Prinzip erklären können
- [ ] Unterschied zwischen Analog & Digital
- [ ] DV-Geräte-Kategorien (Supercomputer, Server, PC)

### Hardware
- [ ] CPU-Einheiten (ALU, Steuerwerk, IDU, FPU)
- [ ] RISC vs. CISC Vor-/Nachteile
- [ ] Speicherhierarchie (Register → RAM → HDD)

### Mainboard
- [ ] Leiterbahnen & Clock Skew
- [ ] BIOS vs. UEFI Unterschiede
- [ ] Chipsatz-Evolution (Northbridge → PCH)

### Prüfungsvorbereitung
- Wiederholen Sie die wichtigsten Begriffe regelmäßig
- Erstellen Sie Karteikarten (Fachbegriff | Definition)
- Nutzen Sie dieses Glossar für schnelle Lookups vor Prüfungen!

---

### 📖 Weitere Lektüre
- Zurück zu: **[Startseite](../index.md)**
- Alle Module: Navigation links (Sidebar)
