//GsI583EDXVtr6hLBpXBVWZIEZlozvLhAPHjFIX8q
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.htm", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/create_layout", urlencodedParser, function(req, res) {
  var request = require("request");

  var options = {
    method: "POST",
    url: "http://localhost/api/layout",
    qs: { envelope: "1" },
    headers: {
      "cache-control": "no-cache",
      Connection: "keep-alive",
      "content-length": "165",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      "accept-encoding": "gzip, deflate",
      cookie: "PHPSESSID=72kphem1qkqrb851101dtvc1hg",
      Host: "localhost",
      "Postman-Token":
        "604ca57a-0e95-4b70-9bf9-385fb769ff77,5050b775-d27f-415d-997e-25e01966e780",
      "Cache-Control": "no-cache",
      Accept: "*/*",
      "User-Agent": "PostmanRuntime/7.13.0",
      Authorization: "Bearer jQz0nhGCRhrv18YNrUWw4W5bejg8am5gQnvdWQuW"
    },
    formData: { name: "teat" }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
});

//TOKEN
app.post("/get_token", urlencodedParser, function(req, res) {
  var request = require("request");

  var options = {
    method: "POST",
    url: "http://localhost/api/authorize/access_token",
    headers: {
      "cache-control": "no-cache",
      Connection: "keep-alive",
      "content-length": "697",
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      "accept-encoding": "gzip, deflate",
      cookie: "PHPSESSID=72kphem1qkqrb851101dtvc1hg",
      Host: "localhost",
      //'Postman-Token': '6ebd46fb-5d3d-40f4-8135-5fc952720cca,de52082b-875b-4f21-b57f-b8cc5be4ad7f',
      "Cache-Control": "no-cache",
      Accept: "*/*"
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
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
