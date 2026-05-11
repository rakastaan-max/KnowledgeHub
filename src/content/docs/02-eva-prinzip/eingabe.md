---
title: Eingabe (E)
description: Datenerfassung und Inputgeräte
difficulty: beginner
---

Die **Eingabe** ist der erste Schritt des EVA-Prozesses. Sie konvertiert externe Signale (wie Tastaturanschläge oder Mausbewegungen) in digitale Daten, die der Computer verarbeiten kann.

## Hardware-Komponenten der Eingabe

### 🎹 **Tastatur (Keyboard)**
- **Typ**: Alphanumerische Eingabe
- **Funktion**: Jeder Tastendruck erzeugt einen digitalen Code (ASCII/UTF-8)
- **Verbindung**: USB, PS/2 (legacy), Bluetooth (wireless)
- **Beispiel**: Nutzer tippt "Hallo" → Computer empfängt 01001000 01100001 …

### 🖱️ **Maus (Mouse)**
- **Typ**: Positionierungs- und Selektionseingabe
- **Funktion**: 
  - Bewegung → X/Y-Koordinaten an CPU
  - Klicks → Befehlsausführung
- **Sensor**: Optisch (LED + Fotosensor) oder Laser
- **Verbindung**: USB, PS/2, Bluetooth

### 📱 **Touchscreen**
- **Moderne Variante**: Kombiniert Maus + Tastatur
- **Funktion**: Erfasst Fingerberührungen (kapazitiv oder resistiv)
- **Standard**: Smartphones, Tablets, moderne Displays

### 📸 **Scanner**
- **Funktion**: Konvertiert **analoge Bilder** (Papierform) in **digitale Bilddaten**
- **Technologie**:
  - Licht wird über Dokumenten gefahren
  - Fotosensoren erfassen Helligkeit
  - Resultat: Pixelgitter (z.B. 2400 dpi)
- **Anwendung**: Dokumentendigitalisierung, Archivierung

### 📊 **Barcode-Leser**
- **Funktion**: Erfasst codierte Informationen (Strichcode)
- **Technologie**: 
  - Laser oder LED leuchtet Barcode an
  - Fotosensor erkennt helles/dunkles Muster
  - Decodierung in Produktnummer
- **Anwendung**: Einzelhandel, Lagerverwaltung

### 🎤 **Mikrofon**
- **Funktion**: Konvertiert **Schallwellen** (analog) in **elektrische Signale** (digital)
- **Prozess**: 
  1. Schall → Membran vibriert
  2. Membran → elektrische Spannung
  3. **ADC** (Analog-Digital-Converter) → digitale Bits
- **Qualität**: Abhängig von Sampling-Rate (44.1 kHz für CD-Qualität)
- **Anwendung**: VoIP, Voice-Recording, Gaming

### 🎮 **Spezial-Eingabegeräte**
- **Joystick**: Positionseingabe für Spiele
- **Grafik-Tablet**: Kunstnerische Eingabe
- **Webcam**: Video + optische Erfassung
- **Sensoren**: Motion Sensor, Temperatursensor, Lichtsensor

## Konzept: Signalkonvertierung

```
┌─────────────────────────┐
│   PHYSIKALISCHE WELT    │
│  (Tastendruck, Licht)   │
└────────────┬────────────┘
             │
        ┌────▼────┐
        │ Sensor  │ (elektrisch)
        └────┬────┘
             │
        ┌────▼────┐
        │   ADC   │ (falls nötig)
        │ (Analog │ (konvertiert
        │ →Digital) zu Bits)
        └────┬────┘
             │
        ┌────▼──────────────┐
        │ DIGITALE DATEN    │
        │ (01010110...)     │
        │ → RAM des Systems │
        └───────────────────┘
```

## Eingabe-Pipeline

```
Nutzer     Hardware    Interface    RAM    CPU
 │            │           │         │      │
 └───Input───▶│───Signal──▶│─Bytes─▶│─────▶│
```

1. **Benutzer** betätigt Inputgerät
2. **Hardware** erfasst Signal (physikalisch → elektrisch)
3. **Schnittstelle** (USB, PS/2) sendet an Computer
4. **Controller** im Computer verarbeitet Signal
5. **RAM** speichert digitale Daten
6. **CPU** kann diese Daten jetzt nutzen

## Charakteristiken guter Eingabegeräte

| Merkmal | Bedeutung |
|---------|-----------|
| **Genauigkeit** | Gemessene Werte entsprechen Realität (z.B. Maus-DPI) |
| **Latenz** | Verzögerung zwischen Nutzer-Aktion und Datenerfassung (kurz = besser) |
| **Ergonomie** | Körperliche Ergonomie (Vermeidung von RSI) |
| **Zuverlässigkeit** | Konsistente Funktionsweise über längere Zeit |
| **Kompatibilität** | Funktioniert mit verschiedenen Betriebssystemen |

## Prüfungsrelevante Konzepte

**Häufige Fragen:**
1. „Was ist die Funktion des Scanners im EVA-Modell?" → **Eingabe** (Konvertierung analog → digital)
2. „Warum benötigt ein Mikrofon einen ADC?" → Weil Schallwellen analog sind, Computer aber digital arbeiten
3. „Nenne zwei Eingabegeräte einer Workstation" → Tastatur, Maus, Tablet, Scanner, ...

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Verarbeitung](./verarbeitung.md)** – Das Gehirn des Computers
- Zurück: **[EVA-Übersicht](./index.md)**
