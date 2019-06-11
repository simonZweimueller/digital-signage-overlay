# xibo-request-test
Diese Version ist zum Testen von simplen Xibo-Requests.

## Beschreibung:
Es gibt 2 Forms (Get Access Token und Create Layout), die beim Submit ein POST an den NodeJS-Server schicken. Der Server schickt dann POST-Requests an Xibo. Der NodeJS-Server schickt die Requests, damit wir keine [CORS-Errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors) bekommen. Die Authorization beim Layout erstellen ist zurzeit hardcoded.

### Problem:
Requests mit Postman funktionieren, aber der von Postman generierte Code, der auf dem NodeJS-Server läuft funktioniert nicht. Beim Access Token haben wir zu viele/wenige Parameter und beim Layout werden die Daten nicht erkannt, die wir mitgeben.

Fehlermeldung beim Anfragen eines Access Token:
![Access Token Error](/img/error1.PNG)

Fehlermeldung beim Erstellen eines Layouts:
![Create Layout Error](/img/error2.PNG)

## how to run:
### 1)
Nodejs downloaden
<https://nodejs.org/en/>
### 2)
node modules herunterladen

    npm update
### 3)
Server starten

    node server.js
### 4)
Zu Xibo mit Putty verbinden

![putty1](/img/putty1.PNG)
![putty2](/img/putty2.PNG)

### 5)
Im Browser mit localhost:8081 die index.html öffnen


## Anmerkung:
Um das erstellen eines Layouts zu testen muss ein Access Token mit Postman geholt werden, den man dann in die Authorization hardcoded. Mit diesem Token kann man eine Stunde lang arbeiten.
