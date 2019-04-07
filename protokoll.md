# Protokoll

## Digital Signage Overlay mit React

### von Leon Tea und Simon Zweimüller

#### 1) Mit Canvas

Beim diesem Bild wird Text hineingeschrieben allerding lässt es sich nicht stylen.
Also man kann keine andere Schriftfarbe, Hintergrundfarbe, Schriftart, ... auswählen.

![canvas1](https://user-images.githubusercontent.com/43468189/54297061-555c7d80-45b6-11e9-8604-25b1d522d8b4.PNG)

Update (28.03.2019): 
<br>
Die Schriftart und Schriftfarbe des Bildes lassen sich nun ändern.

Update (31.03.2019):
<br>
![Unbenannt](https://user-images.githubusercontent.com/43468189/55289406-b82b8280-53c6-11e9-9eb1-c77255dc313c.PNG)
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
![image](https://user-images.githubusercontent.com/43468189/55423734-cde3a800-557e-11e9-8c81-1a4484311f93.png)

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
