---
title: Speicherung (S)
description: RAM, Festplatten und Speicherhierarchie
difficulty: intermediate
---

Die **Speicherung** ist für den Verarbeitungsprozess essentiell. Sie stellt Daten bereit und speichert Zwischenergebnisse ab.

## Speichertypen & Hierachie

Der Computer hat **mehrere Speicherschichten**, unterschiedlich schnell und groß:

```
┌─────────────────────────────────────┐
│  Geschwindigkeit ▲                  │
│       ▲                             │
│    10ns│   CPU Register             │
│        │   (Bytes)                  │
│        │                            │
│    50ns│   L1/L2/L3 Cache           │
│        │   (KBytes–MBytes)          │
│        │                            │
│   100ns│   RAM (Arbeitsspeicher)    │
│        │   (GBytes)                 │
│        │                            │
│    10ms│   SSD (Solid State Drive)  │
│        │   (TBytes)                 │
│        │                            │
│   100ms│   HDD (Festplatte)         │
│        │   (TBytes)                 │
│        ▼                            │
│   LANGSAM                 GROSSE KAPAZITÄT ▶
└─────────────────────────────────────┘
```

### ⚡ **Flüchtiger Speicher (Volatile)** – RAM

#### **RAM (Random Access Memory)**
- **Charakteristika**:
  - Extrem schnell (ca. 50–100 ns Zugriffszeit)
  - Direkt adressierbar (beliebiger Zugriff auf beliebige Speicherstelle)
  - **Flüchtig** (Daten weg beim Ausschalten)
- **Größe**: 4–64 GB in modernen PCs
- **Funktion**: Speichert
  - Laufende Programme
  - Operanden und Zwischenergebnisse
  - Daten des aktuellen Kontexts
- **Technologie**: DRAM (Dynamic RAM) mit Kondensatoren
  - Muss ständig **"aufgefrischt"** werden (10–100 ns)
  - Daher der Name "Dynamisch"

#### **CPU-Register**
- Noch schneller als RAM
- Winzig: Nur einige Kilobytes
- Speichern **unmittelbare Rechenergebnisse**

#### **Cache (L1, L2, L3)**
- Speichert oft benutzte Daten vom RAM
- Reduziert Zugriffe auf langsameren RAM
- Größen:
  - L1: 32 KB–64 KB (sehr schnell, auf Core)
  - L2: 256 KB–1 MB (Core-Ebene)
  - L3: 4 MB–12 MB (Chip-Ebene)

### 💾 **Dauerhafter Speicher (Non-Volatile)**

#### **SSD (Solid State Drive)**
- **Technologie**: Flash-Speicher (elektronisch)
- **Geschwindigkeit**: 
  - 1–3 µs (Mikrosekunden) = 1.000–3.000 ns
  - ~100× schneller als HDD
  - ~50× langsamer als RAM
- **Kapazität**: 256 GB–4 TB Standard
- **Lebensdauer**: 
  - Limitiert auf Schreib-Zyklen (~10.000–100.000)
  - Modern: > 5 Jahre
- **Vorteil**: Keine beweglichen Teile → robust, schnell, energieeffizient
- **Nachteil**: Teurer als HDD

#### **HDD (Hard Disk Drive)**
- **Technologie**: Magnetische Scheibe + rotierender Schreib-Lesekopf
- **Geschwindigkeit**: 
  - 10–20 ms (Millisekunden!) = 10.000–20.000 µs
  - Deutlich langsamer als SSD
  - Abhängig von Rotationsgeschwindigkeit (5.400–7.200 RPM)
- **Kapazität**: 1–12 TB Standard
- **Lebensdauer**: 
  - Theoretisch unbegrenzt bei Magnetisierung
  - Praktisch: 3–5 Jahre (mechanischer Verschleiß)
- **Vorteil**: Preiswert, große Kapazität
- **Nachteil**: Langsam, bewegliche Teile (Verschleiß)

#### **Flash-EEPROM (NOR/NAND Flash)**
- **Größe**: Typisch 256 MB–1 GB
- **Verwendung**: 
  - BIOS/UEFI (Boot-Firmware)
  - Mobile Speicher (USB-Stick, SD-Karte)
- **Eigenschaft**: Löschbar, aber langsamer als RAM

## Speicherhierarchie – Das Prinzip

**Näher zur CPU = Schneller aber kleiner**

```
     Geschwindigkeit         Größe          Kosten
CPU  ██████████████         ███            ███████
Reg  ██████████████         ███            ███████
L1C  ███████████            ███            ███████
L2C  ██████████             ████           ████
L3C  █████████              █████          ███
RAM  ████████               ████████       █
SSD  ███                    ██████████     ██
HDD  ██                     ███████████    █
```

## Praktisches Szenario: Dateibearbeitung

```
Benutzer öffnet Datei (z.B. Word-Dokument):

1. HDD/SSD speichert Datei dauerhaft
2. Nutzer klickt "Öffnen"
3. OS liest Datei von HDD/SSD → RAM
4. CPU liest Zeilen aus RAM → L3 Cache
5. CPU liest Worte aus L3 → L2 Cache
6. CPU liest Bytes aus L2 → L1 Cache
7. CPU liest Byte in Register
8. CPU: Prozessiere Byte (Spellcheck, Rendering, …)
9. Ergebnis: Register → L1 → RAM
10. Nutzer speichert (Ctrl+S): RAM → HDD/SSD

Bei erneutem Öffnen: Schneller, da Betriebssystem
eventuell Datei noch im RAM/Cache hat (Caching)
```

## Speicherzugriff – Adressierungsmodelle

Der Computer hat **Adressen** statt Behälternamen:

```
RAM-Adressbereich (theoretisch, 32-bit PC):
  
  0x00000000: [Betriebssystem]
  0x00001000: [Programm-Code]
  0x00100000: [Heap (dynamische Daten)]
  0x10000000: [Stack (Variablen)]
  0xFFFFFFFF: [Systemdaten / BIOS]
  
CPU-Befehl: "LOAD R1, [0x00100000]"
→ Lade Wert aus Adresse 0x00100000 in Register 1
```

## Memory Management

**Moderne Betriebssysteme** verwalten Speicher:

- **Virtual Memory**: Mehr RAM vortäuschen durch Auslagerung auf Festplatte
- **Paging**: Speicher in 4 KB-Blöcke unterteilen
- **Swapping**: Inaktive Daten auf Festplatte auslagern (sehr langsam!)
- **Garbage Collection**: Ungenutzten Speicher freigeben

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Ausgabe](./ausgabe.md)** – Darstellung & Ausgabegeräte
- Zurück: **[EVA-Übersicht](./index.md)**
- Tiefergehend: **[Speicherhierarchie](../04-mainboard-chipsatz/speicherhierarchie.md)** im Mainboard-Modul
