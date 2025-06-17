# Larry's Quiz - Webseite Spezifikation

Erstelle eine mobile-first Quiz-Webseite mit folgenden Anforderungen:

## 🎯 **Grundfunktionalität**
- **Quiz-Konzept**: Eine Webseite die ein interaktives Bilderquiz darstellt
- **Zielgruppe**: Persönliches Geburtstagsgeschenk für Larry (30. Geburtstag)
- **Hosting**: Direkt auf GitHub Pages hostbar (statische HTML/CSS/JS Dateien)
- **Navigation**: Vor/Zurück-Navigation zwischen Hinweisen funktional
- **Auflösung**: Button "Auflösung" erscheint erst nach dem letzten Hinweis

## 📱 **Design-Anforderungen**
- **Mobile First**: Primär für Smartphones optimiert, responsive für alle Geräte
- **Design-Stil**: Modern und ansprechend (Material Design bevorzugt)
- **Farbschema**: Helles Design mit ansprechender Farbpalette
- **Benutzerfreundlichkeit**: Intuitive Navigation und klare Bedienelemente

## 📁 **Content-Struktur**
- **Datenquelle**: `hinweise.md` enthält die Quiz-Fragen/Hinweise
- **Bilder**: 8 nummerierte Bilder (1.jpg bis 8.jpg) im Root-Verzeichnis
- **Zuordnung**: Jeder Hinweis ist dem entsprechend nummerierten Bild zugeordnet
- **Auflösung**: Alle Hinweise führen zur Antwort "Marokko"

## 🎪 **User Experience**
- **Willkommensseite**: Einführung und Erklärung des Quiz-Konzepts
- **Quiz-Flow**: 8 Schritte mit Bild + Hinweis, Hinweise bleiben bestehen bis "Weiter" geklickt wird
- **Progress-Anzeige**: Fortschrittsbalken zeigt aktuellen Stand (X/8)
- **Finale Überraschung**: Nach Auflösung persönliche Geburtstagsnachricht: "Alles Gute zum 30. Larry :) Ich liebe dich über alles und schenke dir eine Reise nach Marokko! 💕"

## 🛠 **Technische Anforderungen**
- **Dateien**: `index.html`, `style.css`, `script.js`
- **Framework**: Vanilla JavaScript (keine externen Dependencies)
- **Icons**: Material Icons oder vergleichbare Icon-Bibliothek
- **Fonts**: Moderne Web-Fonts (Google Fonts)
- **Performance**: Optimiert für schnelle Ladezeiten
- **Accessibility**: Keyboard-Navigation und Screen-Reader Support

## 📐 **Layout-Struktur**
1. **Header**: Titel "Larry's Quiz" mit Untertitel
2. **Willkommensbereich**: Erklärung + Start-Button
3. **Quiz-Bereich**: Bild + Hinweis + Navigation + Progress
4. **Auflösungsbereich**: Antwort "Marokko" + Geburtstagsnachricht + Neustart-Option

## 🎨 **Design-Elemente**
- **Cards**: Moderne Card-Layouts für Content-Bereiche
- **Buttons**: Material Design Buttons (Primary/Secondary/FAB)
- **Progress**: Linear Progress Indicator
- **Animationen**: Smooth Transitions und Micro-Interactions
- **Responsive Grid**: 8px/16px Grid-System für konsistente Abstände

Die Webseite soll als liebevolles, interaktives Geburtstagsgeschenk fungieren, das Larry durch ein visuelles Rätsel führt und am Ende die Überraschung einer Marokko-Reise enthüllt.