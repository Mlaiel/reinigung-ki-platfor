# Admin-Dashboard Anleitung

## Zugang zum Dashboard

1. Navigieren Sie zu `/admin` in der URL oder klicken Sie auf "Admin" in der Navigation
2. Geben Sie das Passwort ein: `admin123`
3. Klicken Sie auf "Anmelden"

## Hauptfunktionen

### Übersicht
- **Statistiken**: Gesamtbuchungen, neue Buchungen, heutige Termine, monatlicher Umsatz
- **Neueste Buchungen**: Die 5 neuesten Buchungen werden angezeigt

### Buchungen verwalten
- **Status ändern**: Dropdown-Menü für jeden Buchungseintrag (Neu, Bestätigt, Abgeschlossen, Storniert)
- **Details anzeigen**: Alle Kundendaten, Servicedetails, Termine und Notizen
- **Bearbeiten**: Button zum Öffnen des Bearbeitungsdialogs

### Kunden
- **Kundenliste**: Übersicht aller Kunden mit Anzahl der Buchungen
- **Umsatz pro Kunde**: Gesamtumsatz je Kunde anzeigen

### Einstellungen
- **Demo-Daten laden**: Fügt Beispiel-Buchungen hinzu zum Testen
- **Alle Daten löschen**: Entfernt alle Buchungen (Vorsicht!)

## Buchungen vom Frontend

Buchungen werden automatisch erstellt, wenn Kunden:
1. Ein Angebot über das KI-System erstellen
2. Den "Jetzt buchen" Button klicken  
3. Das Buchungsformular vollständig ausfüllen
4. Die Buchung bestätigen

Neue Buchungen erscheinen sofort im Admin-Dashboard mit Status "neu".

## Sicherheit

- Login ist erforderlich für den Zugang
- Session wird lokal gespeichert
- In Production sollte ein sicheres Authentication-System implementiert werden

## Datenpersistenz

Alle Daten werden über das Spark KV-System gespeichert und bleiben zwischen den Sessions erhalten.