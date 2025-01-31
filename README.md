
# NewsAPP

NewsAPP ist eine einfache und benutzerfreundliche Anwendung, mit der du die neuesten Nachrichten weltweit abrufen kannst. Die App ermöglicht es den Nutzern, nach Nachrichten zu suchen, die nach Relevanz, Veröffentlichung und Popularität gefiltert werden können. Die App verwendet die [NewsAPI](https://newsapi.org/) für das Abrufen von Nachrichten.

## Features

- **Nachrichten suchen:** Du kannst nach Artikeln suchen, indem du ein Schlüsselwort eingibst.
- **Sprache auswählen:** Du kannst die Anzeigesprache der Nachrichten auf Deutsch, Englisch oder Spanisch einstellen.
- **Sortierung der Ergebnisse:** Du kannst die Nachrichten nach Relevanz, Neuigkeit oder Popularität sortieren.
- **Responsive Design:** Die App funktioniert auf mobilen Geräten und Desktops.

## Screenshots

![NewsAPP Screenshot](./screenshot.png)

## Technologie-Stack

- **Frontend:** React, TypeScript, Next.js
- **Backend:** [NewsAPI](https://newsapi.org/) (Verwendung der API für das Abrufen von Nachrichten)
- **Styling:** Tailwind CSS

## Installation

1. Klone das Repository auf deinen lokalen Rechner:

   ```bash
   git clone https://github.com/davidschwarz153/NewsAPP.git
   ```

2. Navigiere in das Projektverzeichnis:

   ```bash
   cd NewsAPP
   ```

3. Installiere die benötigten Abhängigkeiten:

   ```bash
   npm install
   ```

4. Erstelle eine `.env`-Datei im Stammverzeichnis des Projekts und füge deinen NewsAPI API-Schlüssel hinzu:

   ```env
   NEXT_PUBLIC_API_TOKEN=dein-api-schluessel
   ```

   (Ersetze `dein-api-schluessel` durch deinen tatsächlichen API-Schlüssel von [NewsAPI](https://newsapi.org/)).

5. Starte den Entwicklungsserver:

   ```bash
   npm run dev
   ```

6. Öffne deinen Browser und gehe zu `http://localhost:3000`, um die Anwendung zu testen.

## Funktionen

- **Suchanfragen:** Du kannst nach Nachrichten mit einem bestimmten Schlüsselwort suchen.
- **Sprache und Sortierung:** Du kannst die Anzeigesprache der Nachrichten sowie die Sortierung (nach Relevanz, Neuigkeit oder Popularität) ändern.
- **Responsive Design:** Das Design ist für alle Bildschirmgrößen optimiert und funktioniert auf mobilen Geräten und Desktops gleichermaßen.

## Contributing

Beiträge sind willkommen! Wenn du Ideen zur Verbesserung hast oder Fehler findest, öffne bitte ein [Issue](https://github.com/davidschwarz153/NewsAPP/issues) oder sende einen [Pull Request](https://github.com/davidschwarz153/NewsAPP/pulls).

