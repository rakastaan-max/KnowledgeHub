---
title: DV-Geräte Kategorien
description: Klassifizierung von Computersystemen
difficulty: beginner
---

Es gibt verschiedene Typen von Rechnersystemen, die je nach **Einsatzgebiet, Leistung und Aufbau** klassifiziert werden. Diese Kategorisierung ist wichtig für dein Verständnis der Hardwarelandschaft.

## Systemklassifizierung

### 🖥️ **Supercomputer**
- **Einsatzgebiet**: Simulation komplexer Vorgänge
  - Wettervorhersage (Millionen von Rechenergebnissen pro Sekunde)
  - Klimamodellierung
  - Moleküldynamik-Simulationen
  - Künstliche Intelligenz Training
- **Charakteristika**:
  - **Tausende bis Millionen Prozessoren**
  - Speicher im Terabyte-Bereich
  - Extreme Kühlanforderungen
- **Leistungsmessung**: **Peta-FLOPS** (10¹⁵ Floating Point Operations Per Second)
- **Beispiel**: Fugaku (Japan) ~ 442 Peta-FLOPS

### 🏢 **Mainframe**
- **Einsatzgebiet**: Großrechner für Zuverlässigkeit und Massendatenverarbeitung
  - Banksysteme (Transaktionsverarbeitung)
  - Versicherungen (Massenabrechnung)
  - Behörden (Register)
- **Charakteristika**:
  - **Spezialisiert auf Durchsatz**, nicht auf einzelne schnelle Operationen
  - Fehlertoleranz & Redundanz (24/7 Betrieb)
  - Multi-User Systeme (hunderte Nutzer gleichzeitig)
  - Sehr teuer (Millionen Euro)
- **Leistungsmessung**: **Transactions Per Second (TPS)**, **Durchsatz**
- **Beispiel**: IBM zSeries (historisch Mainframe-Standard)

### 📡 **Server**
- **Einsatzgebiet**: Zentraler Rechner in einem Netzwerk
  - Web-Server (Betrieb von Websites)
  - Datei-Server (Zentrale Speicherung)
  - Mail-Server (E-Mail-Verwaltung)
  - Datenbank-Server
- **Charakteristika**:
  - **Multi-User & Multi-Task**: Verwaltet Clients und stellt Dienste bereit
  - Hohe Verfügbarkeit
  - Netzwerk-Interface ist kritisch
- **Leistungsmessung**: **Netzwerklast**, **Response Time**, **Durchsatz**
- **Skalierbarkeit**: Wird oft in Server-Farms zusammengefasst (Cloud)

### 🖱️ **Workstation** (nicht in Ursprungs-HTML, aber relevant)
- **Einsatzgebiet**: Leistungsstarker Personal Computer
  - Grafik-Design (hohe GPU-Anforderungen)
  - 3D-Modellierung
  - Ingenieur-Anwendungen
  - Video-Bearbeitung
- **Zwischen**: Desktop-PC und Server

### 💻 **Personal Computer (Desktop/Laptop)**
- **Einsatzgebiet**: Allgemeine Büroarbeit, Internet, Unterhaltung
- **Charakteristika**:
  - Single-User (meist 1 Person)
  - Moderate Leistung
  - Preisgünstig
- **Standard heute**: Intel/AMD CPUs, 8–16 GB RAM, 256 GB–1 TB SSD

### ☎️ **Terminal** (Legacy-Konzept)
- **Definition**: Reine Datenendstation ohne eigene Rechenleistung
- **Funktion**: 
  - Nur **Ein-/Ausgabe-Interface** (Tastatur, Monitor)
  - Alle Berechnungen erfolgen auf einem **entfernten Zentralrechner**
- **Historischer Kontext**: In der Mainframe-Ära dominierend (1970er–1980er)
- **Modern**: **Thin Client** ist die Entsprechung (z.B. Citrix, Remote-Desktop)
- **Leistungsmessung**: N/A (keine eigene Rechenleistung)

## Vergleichstabelle

| Gerät | Nutzer | Rechenleistung | Einsatzgebiet | Verfügbarkeit |
|-------|--------|---|---|---|
| **Supercomputer** | Spezialist | Exaflops | Wissenschaft | Sehr hoch |
| **Mainframe** | Hunderte | Sehr hoch | Transaktionen | 24/7 |
| **Server** | Tausende | Hoch | Netzwerk-Services | Kontinuierlich |
| **Workstation** | 1 | Hoch (GPU) | Spezialaufgaben | Normal |
| **Desktop-PC** | 1 | Mittel | Allgemein | Normal |
| **Laptop** | 1 mobil | Mittel | Mobil | Battery-abhängig |
| **Terminal** | 1 | Keine | Remote I/O | Normal |

## FLOPS – Die Leistungsmetrik

**FLOPS** = Floating Point Operations Per Second (Gleitkomma-Operationen pro Sekunde)

### Skalierung
- **KFLOPS** (Kiloflops): 10³ = 1.000
- **MFLOPS** (Megaflops): 10⁶ = 1 Million
- **GFLOPS** (Gigaflops): 10⁹ = 1 Milliarde
- **TFLOPS** (Teraflops): 10¹² = 1 Billion
- **PFLOPS** (Petaflops): 10¹⁵ (Supercomputer)
- **EFLOPS** (Exaflops): 10¹⁸ (kommend)

Ein **moderner Desktop-PC** erreicht etwa **100–500 GFLOPS**.

---

### 📖 Weitere Lektüre
- Zurück: **[Analog vs. Digital](./analog-digital.md)**
- Nächstes Modul: **[EVA-Prinzip](../02-eva-prinzip/)**
