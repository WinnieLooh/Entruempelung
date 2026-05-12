# Roberts Entrümpelung - Projekt Übersicht

## 📁 Dateien & Struktur

```
/
├── index.html          → Hauptseite (HTML & CSS)
├── script.js           → Alle interaktiven Funktionen
├── README.md           → Projekt-Dokumentation
└── INIT.md            → Diese Datei
```

---

## 🎯 Wichtigste Informationen

### Unternehmen
- **Name:** Roberts Entrümpelung & Haushaltsauflösung
- **Region:** Ganz Niedersachsen
- **Telefon:** 0177 213 1840
- **E-Mail:** info@roberts-entruempelung.de
- **Adresse:** Celler Str. 17, 30161 Hannover
- **WhatsApp:** +491772131840

---

## 🎨 Design-System (CSS Variablen)

Alle Farben & Styles sind im `<style>` Tag in `index.html` definiert:

```css
:root {
  --green: #6abf2e              /* Primärfarbe - CTAs, Accents */
  --green-dark: #4e9420         /* Hover-State der Primärfarbe */
  --navy: #1a2535               /* Dunkelblau - Headlines, Text */
  --navy-light: #243044         /* Helles Dunkelblau */
  --white: #ffffff              /* Weiß */
  --light-bg: #f5f7f2           /* Hellgrüner Hintergrund */
  --gray: #6b7280               /* Grau - Beschreibungen */
  --text: #1a2535               /* Haupttext */
  --shadow-sm: 0 2px 8px        /* Kleine Schatten */
  --shadow-md: 0 2px 16px       /* Mittlere Schatten */
  --shadow-lg: 0 12px 32px      /* Große Schatten */
  --transition-fast: 0.2s       /* Schnelle Animationen */
  --transition-normal: 0.3s     /* Normale Animationen */
}
```

**Verwendung:** `color: var(--green);`

---

## 📄 HTML-Struktur & Sektions-IDs

Jede Sektion hat eine eindeutige `id` für Navigation:

| Sektion | ID | Beschreibung |
|---------|-----|--|
| Topbar | `topbar` | Kontaktinfos oben |
| Navigation | `nav` | Sticky Navigation |
| Hero | `hero` | Großes Bild + Headline |
| **Leistungen** | `#leistungen` | 4 Service-Cards |
| **So funktioniert's** | `#how` | 3-Schritte-Prozess |
| **Kundenstimmen** | `#reviews` | 3 Kundenbewertungen |
| **Einsatzgebiet** | `#gebiet` | Karte + Städteliste |
| **FAQ** | `#faq` | Häufig gestellte Fragen |
| **Kontakt** | `#kontakt` | Kontaktform + Infos |
| **Footer** | `footer` | Unterseite |

**Navigation anpassen:** Links im `<nav>` Element ändern (ca. Line 400-410)

---

## 📝 Inhalts-Locations im HTML

### Topbar (Kontaktinfos)
- **Datei:** `index.html`
- **Zeilen:** ~383-391
- **Ändern:** Telefon, E-Mail, Einsatzgebiet

### Hero Section
- **Zeilen:** ~412-448
- **Enthält:** 
  - Hauptheadline
  - Subtext
  - Buttons (CTA)
  - Trustmarks

### Leistungen (Services)
- **Zeilen:** ~450-502
- **Struktur:** 4 Cards mit Icon, Titel, Text, Checkmarks
- **Ändern:** Card-Inhalte in den `.card` Divs

### So funktioniert's
- **Zeilen:** ~504-547
- **Struktur:** 3 Steps (`.step` Klassen)

### Kundenstimmen
- **Zeilen:** ~549-599
- **Struktur:** 3 Review-Cards (`.review-card`)

### Einsatzgebiet
- **Zeilen:** ~601-645
- **Struktur:** 
  - Links: Städteliste + extra Info
  - Rechts: Google Maps Embed

### FAQ
- **Zeilen:** ~647-701
- **Struktur:** `<details>` / `<summary>` Elemente
- **Keine JS nötig!** (native `<details>` Tag)

### Kontakt & Form
- **Zeilen:** ~703-763
- **Struktur:**
  - Links: Kontaktinfos
  - Rechts: Kontaktformular

### Footer
- **Zeilen:** ~765-810
- **Enthält:** Links, Kontakt, Copyright

---

## ⚙️ JavaScript-Funktionen (script.js)

### `toggleMenu()`
- **Funktion:** Öffnet/schließt mobiles Menü
- **Ausgelöst durch:** Hamburger-Button click
- **HTML-Element:** `.hamburger` Button

### `initScrollAnimations()`
- **Funktion:** Fade-in Animationen beim Scrollen
- **Auslöser:** IntersectionObserver
- **Betroffene Elemente:** Alle mit Klasse `.fade-in`

### Event Listener für Menü-Schließen
- Schließt Menü bei Link-Click
- Schließt Menü bei Click außerhalb

---

## 🎬 CSS-Klassen für Content

### Buttons
```html
<a href="#kontakt" class="btn-primary">Text</a>
<a href="#" class="btn-secondary">Text</a>
```

### Cards
```html
<div class="card">
  <div class="card-icon">Icon/Emoji</div>
  <h3>Titel</h3>
  <p>Beschreibung</p>
  <ul class="card-checks">
    <li>Punkt 1</li>
  </ul>
</div>
```

### Animationen
```html
<div class="fade-in">Content</div> <!-- Fade-in beim Scrollen -->
```

### Badges & Labels
```html
<div class="section-label">LABEL</div>
<div class="hero-badge"><span class="dot"></span> Text</div>
```

---

## 🔧 Häufige Änderungen

### Telefon/E-Mail aktualisieren
1. Topbar (ca. Line 385-386)
2. Kontakt-Section (ca. Line 731-737)
3. Footer (ca. Line 800-803)
4. `script.js` WhatsApp-Link updaten

### Services/Cards bearbeiten
1. Gehe zu Leistungen-Section (ID: `#leistungen`)
2. Ändere `.card` Inhalte
3. Emojis/Icons in `.card-icon`

### Text in Sections ändern
1. Suche nach Section-ID (z.B. `id="leistungen"`)
2. Ändere Content innerhalb `<h2>`, `<p>`, etc.

### Neue Kundenbewertung hinzufügen
1. Gehe zu Reviews (ID: `#reviews`)
2. Kopiere `.review-card` Block
3. Ändere Quote, Stars, Name, Location

### Neue Stadt zu Einsatzgebiet
1. Gehe zu Gebiet-Section (ID: `#gebiet`)
2. Füge `<li>` in `.gebiet-list` hinzu

### FAQ-Frage hinzufügen
1. Gehe zu FAQ (ID: `#faq`)
2. Kopiere `<details>` Block
3. Ändere `<summary>` (Frage) und `.faq-a` (Antwort)

---

## 🚀 Responsive Design

### Breakpoints
```css
@media (max-width: 900px)  /* Tablets */
@media (max-width: 600px)  /* Mobile */
```

Diese sind am Ende der `<style>` Sektion definiert.

---

## 📊 Performance-Tipps

✅ **Bereits optimiert:**
- Lazy Loading Images (loading="lazy")
- Intersection Observer für Animations
- CSS Variables für Performance
- `defer` Attribut für Script

---

## 🔗 Wichtige URLs & Links

- **Hero CTA:** `href="#kontakt"`
- **Nav Links:** Alle gehen zu Section IDs (`#leistungen`, etc.)
- **WhatsApp:** `https://wa.me/491772131840`
- **Google Maps:** Embed in Gebiet-Section

---

## 📱 Navigation für Quick Access

**Schnelle Navigation im HTML:**
- Topbar: Suche nach `class="topbar"`
- Hero: Suche nach `class="hero"`
- Cards: Suche nach `class="card"`
- FAQ: Suche nach `<details`
- Form: Suche nach `class="form-card"`

**Mit Ctrl+F direkt zu Section:**
- `id="leistungen"`
- `id="how"`
- `id="reviews"`
- `id="gebiet"`
- `id="faq"`
- `id="kontakt"`

---

## 📋 Datei-Größen

```
index.html  → ~30 KB (HTML + CSS)
script.js   → ~2 KB (JavaScript)
```

---

**Zuletzt aktualisiert:** Mai 12, 2026
