# 🌙 Larry's Orientalisches Quiz ⭐

Ein interaktives, mobile-first Quiz mit orientalischem Design, das auf GitHub Pages gehostet werden kann.

## 📱 Features

- **Mobile-First Design**: Optimiert für Smartphones und Tablets
- **Orientalisches Theme**: Wunderschöne Farben und Schriftarten im orientalischen Stil
- **Progressive Web App**: Service Worker für bessere Performance und Offline-Unterstützung
- **Responsive Design**: Funktioniert perfekt auf allen Bildschirmgrößen
- **Keyboard Navigation**: Vollständige Tastaturunterstützung
- **Touch/Swipe Support**: Intuitive Gestensteuerung auf mobilen Geräten
- **Accessibility**: Optimiert für Barrierefreiheit

## 🎮 Spielmechanik

1. **8 Hinweise**: Jeder Hinweis enthält ein Bild und eine poetische Beschreibung
2. **Navigation**: Vor- und Zurück-Buttons, sowie Keyboard- und Touch-Unterstützung
3. **Auflösung**: Nach dem letzten Hinweis wird die Lösung "Marokko" präsentiert
4. **Neustart**: Möglichkeit, das Quiz erneut zu spielen

## 🚀 GitHub Pages Setup

1. **Repository Settings**: Gehe zu den Repository-Einstellungen
2. **Pages Sektion**: Aktiviere GitHub Pages
3. **Source**: Wähle "Deploy from a branch"
4. **Branch**: Wähle `main` (oder `master`) und Root-Verzeichnis
5. **Speichern**: Die Webseite ist dann unter `https://USERNAME.github.io/REPOSITORY-NAME` verfügbar

## 📁 Dateistruktur

```
larry-quiz/
├── index.html          # Haupt-HTML-Datei
├── style.css           # Orientalisches CSS-Styling
├── script.js           # JavaScript-Logik
├── sw.js              # Service Worker
├── README.md          # Diese Dokumentation
└── files/
    ├── 1.jpg          # Quiz-Bilder
    ├── 2.jpeg
    ├── 3.jpg
    ├── 4.jpg
    ├── 5.webp
    ├── 6.jpg
    ├── 7.jpg
    ├── 8.jpg
    └── hinweise.md    # Original-Hinweise
```

## 🎨 Design-Features

- **Farbschema**: Gold, Tiefblau, Warmes Orange, Lila und Smaragdgrün
- **Schriftarten**: 'Amiri' und 'Scheherazade New' für authentischen orientalischen Look
- **Animationen**: Sanfte Übergänge und pulsierende Effekte
- **Glasmorphismus**: Moderne transparente Effekte mit Backdrop-Blur
- **Orientalische Ornamente**: Emojis und Symbole für authentische Atmosphäre

## 🎯 Keyboard Shortcuts

- **Pfeiltasten Links/Rechts**: Navigation zwischen Hinweisen
- **Enter**: Bestätigen/Weiter
- **Escape**: Zurück zum Start

## 📱 Touch Gestures

- **Swipe Links**: Nächster Hinweis
- **Swipe Rechts**: Vorheriger Hinweis

## 🌐 Browser-Unterstützung

- ✅ Chrome/Chromium (alle Versionen)
- ✅ Firefox (alle Versionen)
- ✅ Safari (iOS und macOS)
- ✅ Edge (alle Versionen)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile, etc.)

## 🛠 Entwicklung

### Lokaler Test
```bash
# Einfacher HTTP-Server mit Python
python -m http.server 8000

# Oder mit Node.js
npx serve .
```

### Anpassungen
- **Bilder**: Ersetze die Dateien im `files/` Ordner
- **Hinweise**: Bearbeite die Texte in `script.js` im `quizData` Array
- **Styling**: Passe die CSS-Variablen in `style.css` an
- **Antwort**: Ändere die Lösung im Reveal-Screen in `index.html`

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

## 🤝 Beitragen

Pull Requests und Issues sind willkommen!

---

Erstellt mit ❤️ für ein wunderschönes Quiz-Erlebnis
