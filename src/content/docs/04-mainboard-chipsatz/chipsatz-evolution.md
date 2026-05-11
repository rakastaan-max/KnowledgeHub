---
title: Chipsatz-Evolution
description: Von Northbridge/Southbridge zur PCH-Architektur
difficulty: intermediate
---

Der **Chipsatz** ist das Leitungs-Management-System des Mainboards. Seine Evolution zeigt, wie sich Mainboard-Architektur über die Jahre verändert hat.

## Legacy Chipsatz-Architektur (1995–2015)

### Zweite-Chip-System: Northbridge & Southbridge

```
             [CPU]
               │
          [FSB 1600 MHz]
               │
        ┌──────┴──────┐
        │             │
   [Northbridge]  [Southbridge]
        │             │
     ┌──┴──┐       ┌──┴──┬──┬──┐
    RAM  GPU    USB SATA Audio
```

#### **Northbridge (MCH – Memory Controller Hub)**
- **Aufgabe**: Schnelle Anbindung
- **Verbindung**:
  - CPU via FSB (Front Side Bus) – 1600 MHz
  - RAM via FSBA (FSB Accelerated) – auch schnell
  - GPU via PCI-E
- **Latenz**: Relativ hoch (Zwischenschicht)
- **Hitzentwicklung**: Stark → brauchte oft eigenen Kühler

#### **Southbridge (ICH – I/O Controller Hub)**
- **Aufgabe**: Langsame Anbindung
- **Verbindung**:
  - Northbridge via DMI/PCI
  - USB (bis USB 2.0)
  - SATA (für Festplatten)
  - Audio
  - Netzwerk
  - Legacy: Parallele Ports, PS/2
- **Geschwindigkeit**: Deutlich langsamer

### Problem: FSB-Bottleneck
```
CPU möchte auf RAM zugreifen:

1. CPU sendet Anfrage via FSB (1600 MHz)
2. Northbridge erhält Anfrage
3. Northbridge sucht Adresse in RAM
4. RAM schickt Daten zurück
5. Northbridge gibt Daten an CPU zurück

Latenz: ~100 ns (Northbridge-Verzögerung)

Bei modernen CPUs: Zu langsam!
CPU-Takt: 2 GHz = 0,5 ns pro Taktzyklus
100 ns = 200 CPU-Zyklen warten!
```

---

## Moderne Chipsatz-Architektur (2011–heute)

### One-Chip: Speicherkontroller integriert in CPU

```
[CPU (mit integriertem Memory Controller)]
    │
    ├─ [Schnelle Zugriffe] ── RAM (über integrierte Controller)
    │                         ~ 30 ns Latenz
    │
    └─ [DMI 3.0]  ── [PCH (Platform Controller Hub)]
       (8 GB/s)              │
                        ┌─────┴────┬──┬──┐
                       USB SATA Audio Net
```

#### **Speicherkontroller in CPU**
- **Vorteil**: Keine Northbridge-Latenz → direkt Zugriff
- **Resultat**: ~70% schneller RAM-Zugriff
- **Leistungsgewinn**: +5–10% Gesamt-Performance

#### **DMI (Direct Media Interface)**
- **Ersatz für**: Northbridge ↔ Southbridge Link
- **Geschwindigkeit**: 8 GB/s (vs. FSB: ~6 GB/s bei 1600 MHz)
- **Duplex**: Bidirektional
- **Latenz**: Minimal

#### **PCH (Platform Controller Hub)**
- **Ersatz für**: Southbridge
- **Funktion**: Ein Chip statt zwei
- **Sammlung der Komponenten**:
  - Speicherkontroller (modern)
  - Audio
  - USB
  - SATA
  - Ethernet
  - M.2 NVMe Support

### Generationen der PCH

```
Intel Bezeichnung (Mainboards für Konsumenten):

100-Serie  (2015, Skylake):  Z170/H170/B150
200-Serie  (2016, Kaby Lake): Z270/H270/B250
300-Serie  (2017, 8th Gen):   Z370/H370/B360
400-Serie  (2019, 9th Gen):   Z490/H470/B460
500-Serie  (2021, 11th Gen):  Z590/H570/B560
600-Serie  (2021, 12th Gen):  Z690/H670/B660

Je höher die Zahl, desto mehr Features:
  - Z: High-End (Overclocking möglich)
  - H: Mid-Range (Standard)
  - B: Budget (Basic)
```

---

## Vergleich: Alt vs. Neu

| Aspekt | Northbridge/Southbridge | PCH-Architektur |
|--------|---|---|
| **Chip-Anzahl** | 2 | 1 |
| **RAM-Zugriff** | Via Northbridge (100 ns) | Direkt in CPU (~30 ns) |
| **Bustyp** | FSB (400 MHz) | DMI 3.0 (8 GB/s) |
| **Kühlung** | Beide brauchen Kühler | PCH minimal |
| **Kosten** | Teuer (2 Chips) | Günstiger (1 Chip) |
| **Leistung** | Bottleneck bei RAM | Optimal |
| **Stromverbrauch** | Hoch | Niedrig |
| **Design-Komplexität** | Komplex | Einfacher |

---

## Speicherkontroller-Integration im Detail

### Wie funktioniert das?

#### **Modern (Speicherkontroller in CPU)**
```
[CPU Core]
    │
    └─ [Unified Memory Controller]
       (Teil der CPU-Die)
       ├─ [DDR4/DDR5 Controller]
       ├─ [Memory Encryption]
       └─ [Direct to RAM via Backside Bus]

Vorteile:
  - Cache-Coherency ist einfacher
  - Latenz um 60–70% reduziert
  - Mehr Speicher-Bandbreite
  - Energieeffizient
```

#### **Legacy (Northbridge mit Memory Controller)**
```
[CPU]  ──FSB──  [Northbridge (Memory Controller)]
                      │
                  [RAM Chips]

Nachteile:
  - Längerer Pfad
  - FSB ist Bottleneck
  - Höhere Latenz
  - Mehr Stromverbrauch
```

---

## AMD vs. Intel Ansätze

### AMD (seit Ryzen – 2017)
- **Early Adopter** von integrierten Memory Controllern
- **Architektur**: Chiplet-Design (separate I/O Chip)
- **I/O Die**: Kommuniziert mit CPU via Infinity Fabric
- **Vorteil**: Auch mit mehreren CPUs nutzbar (Threaded-Pin-Sockets)

### Intel (seit Core i7 – 2008)
- **Später integriert**, aber konsequent seitdem
- **Architektur**: Monolithischer Die (alles auf einem Chip)
- **QPI/UPI**: Hochgeschwindigkeit zwischen CPUs (Server)
- **Vorteil**: Einfacher für Konsumenten, schneller für Desktop

---

## Praktische Auswirkungen: Overclocking

### Northbridge Era
```
Overclocking-Parameter:
  - FSB übertakten (1600 MHz → 1800 MHz)
  - RAM-Frequenz erhöht mit FSB
  - Problem: Speicherkontroller im Northbridge
    → CPU konnte nicht ohne Northbridge betrieben werden
```

### PCH Era
```
Overclocking-Parameter:
  - CPU-Multiplikator erhöhen (z.B. 40x → 50x)
  - RAM unabhängig übertakten (JEDEC-Profile)
  - Speicherkontroller in CPU
    → Mehr Kontroll-Granularität
```

---

## Zukunftsausblick

### Trends
1. **Noch höhere Integration**
   - I/O (USB, Ethernet) könnten in CPU-Die wandern
   - PCH könnte nur noch Spezial-Controller haben

2. **Chiplet-Architektur**
   - AMD+Intel: Mehrere Chips mit Hochspeed-Interconnect
   - Bessere Energieeffizienz
   - Skalierbarkeit

3. **Speculative Execution**
   - Zukünftige Architekturen minimieren Latenz weiter
   - Out-of-Order Execution wird noch aggressiver

---

### 📖 Weitere Lektüre
- Nächstes Kapitel: **[Speicherhierarchie](./speicherhierarchie.md)** – Gesamtsicht
- Zurück: **[Mainboard](./index.md)**
