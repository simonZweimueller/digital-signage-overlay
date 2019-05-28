# digital-signage-overlay
an external Website to upload images to xibo

by Leon Tea and Simon Zweimüller

## Beschreibung:

Ziel ist es eine Website zu erstellen auf der Benutzer entweder ein Bild direkt hochladen oder einen Text eingeben kann der zu einem Bild konvertiert wird.
Anschließend kann der Benutzer das Display auswählen auf welchem das Bild angezeigt werden soll.
Es können Termine vom Benutzer festlegt, die bestimmen wann das Bild angezeigt wird. 
Zum Schluss wird das Bild zum xibo geschickt.

![Usecase Diagramm](/img/usecase_diagramm.png)

![Systemarchitektur](/img/Systemarchitektur.PNG)

### Aktueller Stand:

Der Clientseitige Teil mit vue.js ist fast fertig.

Zurzeit haben wir Probleme mit dem Zugriff auf die Xibo API. Wir bekommen nämlich keinen Access Token, weil der Browser den Zugriff nicht erlaubt.

Fehlermeldung:
![Error](/img/error.PNG)

## Wie führt man das Programm aus:
### 1 und 2 sind einmalig pro Maschine

### 1)
Nodejs downloaden um npm zu bekommen

<https://nodejs.org/en/>
### 2)
Serve global herunterladen

    npm add serve -g
    
<https://www.npmjs.com/package/serve>
### 3)
dist Ordner herunterladen um den build des Projekts zu haben.

### 4)
App starten und ausführen

    serve -s dist
und dann im Browser mit localhost:5000 öffnen
