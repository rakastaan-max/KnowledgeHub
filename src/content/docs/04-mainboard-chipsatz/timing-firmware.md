---
title: Timer, CMOS & Firmware
description: Zeitmessung und Boot-Firmware auf dem Mainboard
difficulty: intermediate
---

Das Mainboard enthält mehrere **Zeitsteuerungs-** und **Speicherkomponenten**, die für den korrekten Betrieb des Computers essentiell sind.

## Timer-IC (Integrated Circuit) – Der Taktgeber

### Aufgabe
Bietet **exakte Zeitmessung** und **Synchronisation** für alle Komponenten auf dem Mainboard.

### Frequenz-Erzeugung
```
[Quarz-Oszillator]  (14,31818 MHz Referenz)
         ↓
[Timer-IC (82C54)]
         ↓
    ┌────┴────┐
    │          │
  PIT      RTC-Clock
  (Programmable  (Real-Time
   Interval Timer)  Clock)
    │          │
    └────┬────┘
         ↓
   [Alle Komponenten synchronisiert]
```

### Funktionen

#### **PIT (Programmable Interval Timer)**
- Zählt Zeitintervalle (Millisekundenbereich)
- Erzeugt Interrupt-Signale
- Beispiel: "Alle 55 ms Interrupt-Signal senden" → OS erhält Kontext-Switch
- Modernes System: APIC (Advanced Programmable Interrupt Controller) hat übernommen

#### **RTC (Real-Time Clock)**
- Misst echte Uhrzeit (Stunden, Minuten, Sekunden)
- Hat eigenes Register für Datum/Zeit
- Wird durch CMOS-Batterie versorgt (siehe unten)

### Taktsignal-Charakteristiken
```
Ideales Signal (TTL-Level):

 5V   ─────┐     ┌─────┐     ┌──
           │     │     │     │
 0V   ─────┴─────┴─────┴─────┴──
      
      Periode = 1 / Frequenz
      z.B. 14,3 MHz = 69,8 ns pro Periode
```

---

## CMOS-Batterie (CR2032 / Similar)

### Aufgabe
Versorgt den **CMOS-Speicher** mit Strom, damit **BIOS-Einstellungen und RTC** nicht gelöscht werden.

### Funktionsweise
```
Normalzustand (PC an):
  [Netzteil] → [Mainboard]
  
Stromausfallfall:
  [CMOS-Batterie] → [CMOS-RAM & RTC]
  └─ Batterie hält Einstellungen für Wochen/Monate
```

### CMOS-Speicher
- **Größe**: Typischerweise 256 Bytes (NVRAM)
- **Inhalt**:
  - Datum & Zeit (RTC-Daten)
  - BIOS-Einstellungen (Boot-Reihenfolge, Overclocking, etc.)
  - Hardware-Konfiguration
- **Technologie**: SRAM (flüchtig, aber durch Batterie gehalten)
- **Lebensdauer der Batterie**: 5–10 Jahre

### Häufiges Problem
```
Symptom: PC-Zeit ist immer falsch nach Kaltstart
Ursache: CMOS-Batterie leer
Lösung:
  1. PC öffnen
  2. CR2032 Batterie wechseln (~3 Euro)
  3. Zeit neu setzen
  4. Neuer Zustand: RTC läuft wieder korrekt
```

---

## Flash-EEPROM – Die Firmware-Speicherung

### Definition
**Flash-EEPROM** ist ein **nicht-flüchtiger Speicher**, der die BIOS/UEFI-Firmware speichert.

### Charakteristika

#### **Speichergröße**
- Typisch: 256 MB–512 MB (modern, für UEFI)
- Legacy BIOS: 64 KB–256 KB nur
- Größere Größe ermöglicht mehr Features (GraphicalBIOS, Sicherheit)

#### **Technologie**
- **NOR Flash** (älter): Byte-adressierbar, langsamer Schreib-Zugriff
- **NAND Flash** (modern): Schneller, Blöcke adressierbar
- **Triple-Level Cell (TLC)**: Mehr Bits pro Zelle

#### **Zugriffsgeschwindigkeit**
- **Lesen**: 100 MB/s (relativ schnell)
- **Schreiben**: ~10 MB/s (Erase-Vorgänge nötig)
- **Erase-Zeit**: Sekunden bis Minuten (Block-weise)

### Löschbarkeit (Programmability)
- **Erase-Zyklen**: 10.000–100.000 möglich
- **Normale PCs**: Nie im Limit (BIOS wird kaum aktualisiert)
- **Embedded/IoT**: Kann erreicht werden bei häufigen Updates

---

## BIOS vs. UEFI – Die Firmware-Standards

### BIOS (Legacy) – Veraltet
- **Größe**: 64 KB adressierbarer Speicher
- **Start-Code**: 16-Bit Real Mode (sehr primitive Umgebung)
- **Partitionstabelle**: MBR (Master Boot Record) – max 2 TB
- **Funktionalität**: Minimal (Geräte-Init, Boot)
- **Status**: Kaum noch in Produktion

### UEFI (Unified Extensible Firmware Interface) – Modern
```
[Hardware Power-on]
         ↓
[UEFI Firmware in Flash-EEPROM wird geladen]
         ↓
[Grafische Oberfläche (möglich)]
         ↓
[Boot-Manager: Wähle OS von mehreren Disks]
         ↓
[Secure Boot: Berechne Signatur des Boot-Loaders]
         ↓
[Starte Boot-Loader (z.B. GRUB, Windows Boot Manager)]
         ↓
[OS Kernel wird geladen]
```

### UEFI-Vorteile über BIOS
| Feature | BIOS | UEFI |
|---------|------|------|
| **Addressable Memory** | 1 MB | Ganze 64-Bit |
| **Partitionstabelle** | MBR (2 TB limit) | GPT (>2 TB) |
| **Boot-Zeit** | Langsamer | Schneller |
| **Secure Boot** | Keine | ✓ |
| **Graphics** | Text-only | Grafisch möglich |
| **UEFI Spec** | Fixiert | Evolvierbar |
| **Größe** | 64 KB | 256 MB+  |

### GPT (GUID Partition Table)
```
MBR (alt):
  ├─ Partition 1 (Primary)
  ├─ Partition 2 (Primary)
  ├─ Partition 3 (Primary)
  └─ Partition 4 (Extended)
         └─ Partitionen 5, 6, 7, ...
  
  Limit: 4 primäre Partitionen

GPT (neu):
  ├─ Partition 1 (beliebig)
  ├─ Partition 2 (beliebig)
  ├─ Partition 3 (beliebig)
  ├─ ...bis zu 128 Partitionen
  └─ (oder mehr, je nach Implementierung)
  
  Limit: 128+ Partitionen, >2 TB pro Platte
```

---

## Firmware-Update Prozess

### Warnung: Riskant!
**Firmware-Fehler = Computer nicht bootbar!**

### Procedure
```
1. Aktuelle Firmware von Hersteller-Website downloaden
   └─ .bin oder .rom Datei

2. BIOS-Menü öffnen (Del/F2 beim Boot)

3. "Flash BIOS" Option wählen
   └─ UEFI lädt neue Firmware-Datei

4. Schreib-Prozess (1–2 Minuten)
   └─ Flash-EEPROM wird neu beschrieben

5. Automatischer Reboot
   └─ Neue Firmware aktiv

Gefahr: Bei Stromausfall während Update → "Bricked" Mainboard
```

### Schutzmaßnahmen
- **Dual-BIOS**: Zwei Firmware-Speicher, Fallback möglich
- **Recovery-Partition**: Minimale Firmware für Recovery
- **Backup-Battery**: UPS während Update sichert gegen Stromausfälle

---

## Praktisches Beispiel: PC startet nicht

```
Symptom: PC bootet nicht, Fans laufen

Diagnose:
  1. CMOS-Batterie prüfen (Uhr-Zeit verloren?)
     └─ Batterie wechseln

  2. BIOS-Reset
     └─ Clear CMOS (Jumper oder Batterietausch)

  3. UEFI-Firmware prüfen
     └─ Recovery-Mode oder Firmware-Update

  4. Boot-Reihenfolge prüfen
     └─ Festplatte/USB als erstes Gerät
```

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Chipsatz-Evolution](./chipsatz-evolution.md)** – Von Northbridge zu PCH
- Zurück: **[Mainboard](./index.md)**
