var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var accessToken = "EEmECLK0e2dSzeWsa1h6BVkjlhDXnpMbKvIkFpnF";

app.use(express.static("public"));
app.get("/index.htm", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

//TOKEN anfragen
app.post("/get_token", urlencodedParser, function(req, res) {
  var request = require("request");
  var options = {
    method: "POST",
    url: "http://localhost/api/authorize/access_token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    formData: {
      client_id: "zuC885KYpxB0slZ8Nh8UB970X4ENtBGkUQahvHxP",
      client_secret:
        "9Cq4Lhg0Mb4kJfS6nU8sw45ptYG5NIBRjr5rKljtJkeBCt1LJXXp2tVTNWqWYY288BwaCcpgYSesSY1Zs1NrdPK5GCptBxBeka9xfbBffjpG10fMPFYkyVhGuNs8vcB938VkiWQ8O8pi6lb0XBzk8Aq1GjyBjPOnzyMXwslDJ4vfwQjw4p8hkeljq7b2jERziy8iHBMMr6PfSfYreIIlvZ23Ysb6u9XwxVFAecfQe2j5m1YpkBSnG0mbtdwVF4",
      grant_type: "client_credentials"
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    var auth = JSON.stringify(eval("(" + body + ")"));
    console.log(auth.access_token);
    console.log(body.access_token);
    //accessToken = auth.access_token;  funkt noch nicht, value = undefined von auth.access_token
  });
});

//Mitteilung auf beim Layout einstellen
app.post("/set_notification", urlencodedParser, function(req, res) {
  var request = require("request");
  var options = {
    method: "PUT",
    url: "http://localhost/api/layout/9", //layout/{layoutId}
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    form: {
      name: "Test layout",
      backgroundImageId: "28" //mediaID aus der Library
      //thumbnail ändert sich beim Ändern ds backgrounds nicht
      //unter design sieht man ob sich ds bg geändert hat
    }
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});

app.post("/fileupload", urlencodedParser, function(req, res) {
  var request = require("request");
  var options = {
    method: "POST",
    url: "http://localhost/api/library",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "multipart/form-data"
    },
    formData: {
      files: "file" //invalid type?
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});

app.post("/schedule", urlencodedParser, function(req, res) {
  var request = require("request");
  var options = {
    method: "POST",
    url: "http://localhost/api/schedule",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "multipart/form-data"
    },
    formData: {
      eventTypeId: 1,
      displayOrder: 1,
      isPriority: 0,
      displayGroupIds: 2,
      fromDt: "dateStart" //doesnt give the value of the form
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
