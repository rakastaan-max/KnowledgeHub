---
title: Ausgabe (A)
description: Output-Geräte und Darstellung
difficulty: beginner
---

Die **Ausgabe** ist die letzte Etappe des EVA-Prozesses. Sie konvertiert digitale Verarbeitungsergebnisse in Formen, die Menschen verstehen oder nutzen können.

## Hardware-Komponenten der Ausgabe

### 🖥️ **Display / Monitor**
Die häufigste Ausgabe:

- **Technologie**: 
  - **LCD** (Liquid Crystal Display) – Standard moderner Bildschirme
  - **LED** (Light Emitting Diode) – Backlighting
  - **OLED** (Organic LED) – Premium (keine separates Backlight)
- **Auflösung**: Pixel-Grid
  - **HD**: 1280 × 720 Pixel
  - **Full HD (1080p)**: 1920 × 1080 Pixel
  - **2K**: 2560 × 1440 Pixel
  - **4K**: 3840 × 2160 Pixel
- **Farben**: **RGB (Red-Green-Blue)**
  - Jedes Pixel: 3 Subpixel (Rot, Grün, Blau)
  - Jeder Subpixel: 0–255 Helligkeitswerte
  - Ergebnis: 256³ = 16,7 Millionen Farben
- **Bildwiederholfrequenz**: 
  - **Hz (Hertz)** = Bilder pro Sekunde
  - 60 Hz = 60 Bilder/Sekunde
  - Gaming: 144–240 Hz für Smoothness

#### **Digital-zu-Analog Conversion (DAC)**
```
CPU: [digitale Pixeldaten: 11111111 00000000 00000000]
       ↓
DAC: Konvertiert zu analogen Spannungswerten
       ↓
Display: Setzt Pixel [255, 0, 0] = Rot
```

### 🖨️ **Drucker**
Ausgabe auf physisches Medium:

- **Typen**:
  - **Tintenstrahldrucker**: Spritzen Farbpartikel auf Papier (budgetfreundlich)
  - **Laserdrucker**: Elektrostatisches Verfahren (schneller, teuer)
  - **Nadeldrucker**: Legacy (mechanisch, laut)
- **Datenfluss**:
  - CPU sendet Bild als Pixelmatrix via USB/Netzwerk
  - Drucker-Firmware interpretiert Befehl
  - Druckwerk setzt Farbe auf Papier
  - Output: Physisches Dokument

### 🔊 **Lautsprecher**
Audio-Ausgabe:

- **Funktion**: Konvertiert digitale Audiosignale zurück zu Schallwellen
- **Pipeline**:
  - Digital Audio (z.B. MP3-Datei)
  - DAC konvertiert zu analoger Spannung
  - Lautsprecher: Spule vibriert Membran
  - Membran erzeugt Schallwellen
- **Qualität**: Abhängig von
  - Sampling-Rate (44.1 kHz für CD)
  - Bit-Tiefe (16 Bit = guter Standard)
  - Lautsprecher-Qualität (Membran, Magnet)

### 📡 **Netzwerk-Adapter**
Digitale Ausgabe an andere Computer:

- **Übertragung**: Daten via Ethernet/WiFi
- **Zielgeräte**: Remote-PC, Server, Drucker, IoT-Geräte
- **Protokoll**: TCP/IP (Internetstandard)

### 🎮 **Spezial-Ausgabegeräte**
- **Beamer**: Monitor im großen Format
- **VR-Headset**: Immersive 3D-Ausgabe
- **LED-Anzeigen**: Digitale Signalleuchten
- **Vibrations-Feedback**: Gamepad-Rumble

## Der Ausgabe-Prozess

```
┌──────────────────────────────────┐
│     VERARBEITETE DATEN (RAM)     │
│  [Pixeldaten | Audiodaten | …]   │
└────────────┬─────────────────────┘
             │
        ┌────▼────────────┐
        │ GPU/DAC/Codec   │ (Konvertierung)
        │ (Digital→Analog)│
        └────┬────────────┘
             │
        ┌────▼──────────────────┐
        │  Ausgabegerät         │
        │ (Monitor/Drucker/Laut)│
        └────┬──────────────────┘
             │
        ┌────▼──────────────────┐
        │   MENSCH SIEHT/HÖRT   │
        │    (Sinneseindruck)   │
        └───────────────────────┘
```

## Praktisches Beispiel: Video-Abspielen

```
Benutzer drückt Play auf Video-Datei:

1. HDD/SSD liest MP4-Datei in RAM
2. CPU decodiert Video-Kompression (H.264, VP9, etc.)
3. GPU rendet Videoframes → Pixelmatrix
4. DAC konvertiert Pixel-Bits zu Spannungswerten
5. Display zeigt Bild (60 Hz = 60 Frames/Sekunde)

Parallel (Audio):
1. CPU decodiert Audio-Stream
2. DAC konvertiert Audiobits zu Spannungswellen
3. Lautsprecher geben Schall ab

Resultat: Nutzer sieht + hört Video ✓
```

## Ausgabebandbreite – Datenrate

Verschiedene Ausgabegeräte haben unterschiedliche Datenraten:

| Gerät | Datenrate | Beispiel |
|-------|-----------|---------|
| **Monitor (1920×1080, 60 Hz)** | ~3 Gbps | HDMI 1.4 |
| **4K Monitor (3840×2160, 60 Hz)** | ~15 Gbps | HDMI 2.0 |
| **Drucker** | ~10 Mbps (USB) | Über Sekunden verteilt |
| **Lautsprecher (Stereo)** | ~180 kbps | MP3-Qualität |
| **Netzwerk (1 Gbit Ethernet)** | ~1 Gbps | Dateiübertragung |

**Wichtig**: Wenn Ausgabebandbreite **zu niedrig**, entstehen Verzögerungen oder Qualitätsverlust!

## Display-Technologien im Detail

### LCD (Liquid Crystal Display) – Standard
- Backlighting erzeugt Helligkeit
- LCD-Schicht blockiert Licht selektiv
- Energieeffizient
- Weit verbreitet

### OLED (Organic LED)
- Jedes Pixel macht eigenes Licht
- Perfekte Schwarzwerte (kein Backlight)
- Bessere Farben & Kontrast
- Teuer, anfällig für Burn-in

### Refresh Rate & Response Time
- **60 Hz**: Standard, ausreichend für alltägliche Aufgaben
- **144 Hz+**: Gaming (weniger Motion-Blur)
- **Response Time**: Wie schnell Pixel die Farbe wechseln
  - 1 ms: Ultra-schnell (Gaming)
  - 5 ms: Normal (Office)
  - 10 ms+: Langsam (Ghosting möglich)

---

### 📖 Weitere Lektüre
- Zurück: **[EVA-Übersicht](./index.md)**
- Nächstes Modul: **[CPU & Architektur](../03-cpu-architektur/index.md)**
