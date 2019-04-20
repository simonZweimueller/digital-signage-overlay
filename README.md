# digital-signage-overlay
an external Website to upload images to xibo

by Leon Tea and Simon Zweimüller

## Beschreibung:

Ziel ist es eine Website zu erstellen auf der Benutzer entweder ein Bild direkt hochladen oder einen Text eingeben der zu einem Bild konvertiert wird.
Anschließend kann der Benutzer das Display auswählen auf welchem das Bild angezeigt werden soll.
Es können Termine vom Benutzer festlegt, die bestimmen wann das Bild angezeigt wird. 
Zum Schluss wird das Bild zum xibo geschickt.

### Aktueller Stand:

Der Clientseitige Teil mit react ist fertig und wäre einsatzbereit.

Zurzeit haben wir Probleme mit dem Zugriff auf die Xibo API. Wir bekommen nämlich keinen Access Token, weil der Browser den Zugriff nicht erlaubt.

Fehlermeldung:
![Error](/img/error.PNG)

## Wie führt man das Programm aus:
### 1)
Nodejs downloaden um npm zu bekommen

<https://nodejs.org/en/>
### 2)
node modules herunterladen

    npm update
### 3)
App starten

    npm start

