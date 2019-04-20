# Sachstandsbericht 2019-04-11

## Digital Signage Overlay mit React

### von Leon Tea und Simon Zweimüller

#### Zusammenfassung

Wir haben eine React-App erstellt, die der User nutzen kann um Mitteilungen zu erstellen und zu speichern.

Zur Erstellung der Mitteilung verwenden wir Canvas und die Library [React-Canvas](https://github.com/Flipboard/react-canvas).  Der User hat die Möglichkeit Hintergrund-, Schriftfarbe, Schriftart und die Position des Textes festzulegen. Die erstellte Mitteilung als png kann er dann herunterladen.

Es ist geplant diese App mit nodejs zu deployen.

#### Verbindung zu Xibo
Zurzeit wird noch an der Verbindung zu Xibo gearbeitet. Den Code für den Zugriff auf die Xibo-API generieren wir mit Postman. Jedoch bekommen wir zurzeit keinen Access Token, weil der Browser den Zugriff auf Xibo nicht erlaubt, da er bereits mit nodejs verbunden ist.

```javascript
getAccessToken() {
    var data = new FormData();
    data.append("client_id", "oGlPjzpBkmcoLEfoFEZdsy6kdY3mGqfDOkN9S6CM");
    data.append(
      "client_secret",
      "A2hEoqaqjfSxSJGUYihM4aS7qPt1a1gG6odWSDYiqfJQXufqlh2JD8ZECSDjO9EXgPKxJlIk6YD3T6sdagblZzSlXeloTTpAZUqMRnnd8rGcScYoEXwBwmXwnpcu3gYMZfboVvDbj6zKZ3EFB20fxrYZt8bLlFY7fGKIuiuFEHdG1HGIo4zRviWjTbcCZPbbaJ1KYiPtt91uhrExNAWH1oCSTJeaCxFJXm9vTkwuFB5hZ1CJoUHi1XtCsn7TUO"
    );
    data.append("grant_type", "client_credentials");

    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseType);
        console.log(this.responseJson);
      }
    });

    xhr.open("POST", "http://localhost/api/authorize/access_token");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader(
      "Postman-Token",
      "a41f436a-7463-42c0-87b8-78e9d0a9abc7"
    );
    xhr.send(data);
  }  
```

Fehlermeldung:
![Error](/img/error.PNG)

#### Postman

Mit Postman generieren wir den Code für [API-Calls](https://xibo.org.uk/manual-tempel/api/). Wir haben ein [Tutorial](https://community.xibo.org.uk/t/1-8-api-introduction/7702) befolgt, um mit Postman auf die API zugreifen zu können. Weil wir eine [Collection] in Postman importiert haben, müssen wir den Code nicht selber schreiben. Wir müssen nur ergänzen, dass der `responseType = json` ist. 

#### Protokoll React-App

Beim diesem Bild wird Text hineingeschrieben allerding lässt es sich nicht stylen.
Also man kann keine andere Schriftfarbe, Hintergrundfarbe, Schriftart, ... auswählen.

![react_app1](/img/react_app1.PNG)

Update (28.03.2019): 
<br>
Die Schriftart und Schriftfarbe des Bildes lassen sich nun ändern.

Update (31.03.2019):
<br>
![react_app2](/img/react_app2.PNG)
Mehrere verschiedene Texte lassen sich generieren.<br>
Die Hintergrundfarbe ist auch änderbar.
<br>
<br>
Update (01.04.2019):
<br>
Es gibt nun einen Downloadbutton der den canvas als png im Download Ordner speichert.
<br> <br>
Update (02.04.2019):
<br>
Es wurde css hinzugefügt um die Struktur zu verbessern.
![react_app3](/img/react_app3.png)

