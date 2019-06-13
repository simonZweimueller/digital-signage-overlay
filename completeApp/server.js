var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var busboy = require("connect-busboy");
//var FormData = require("form-data");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var accessToken = "";
var mediaId;
var data;

app.use(express.static("public"));
app.use(busboy());
app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

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

  var auth = JSON.stringify(eval("(" + body + ")"));
  var arr1 = auth.split(":");
  var arr2 = arr1[1].split(",");

  accessToken = arr2[0].replace(/"/, "");
  accessToken = accessToken.replace(/"/, "");

  console.log(accessToken);
});

app.post("/imageUpload", urlencodedParser, function(req, res) {
  fs.readFile("./id.txt", function(err, buf) {
    data = buf.toString();
    mediaId = parseInt(data);
    console.log(mediaId);
  });

  var fstream;
  req.pipe(req.busboy);
  req.busboy.on("file", function(fieldname, file, filename) {
    var pathImg = "./files/" + filename + "";
    var path = (fstream = fs.createWriteStream(pathImg));
    console.log(filename);
    file.pipe(fstream);
    fstream.on("close", function() {
      image = {
        path: pathImg
      };
      var request = require("request");
      var options = {
        method: "POST",
        url: "http://localhost/api/library",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "multipart/form-data"
        },
        formData: {
          files: {
            value: fs.createReadStream(pathImg),
            options: {
              filename: filename
            }
          },
          oldMediaId: mediaId,
          updateInLayouts: 1,
          deleteOldRevisions: 1
        }
      };
      data = parseInt(data) + 1; //current Id of the latest uploaded media
      fs.writeFile("./id.txt", data, err => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
      request(options, function(error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
      });
    });
  });
  res.redirect("/");
});

app.post("/schedule", urlencodedParser, function(req, res) {
  data = {
    start: new Date(req.body.start),
    end: new Date(req.body.end),
    screens: req.body.screens
  };
  console.log(data);

  var fData = {
    eventTypeId: 3,
    "displayGroupIds[]": data.screens,
    fromDt: getFormatDate(data.start) + " " + data.start.toLocaleTimeString(),
    toDt: getFormatDate(data.end) + " " + data.end.toLocaleTimeString(),
    campaignId: 29,
    displayOrder: 0,
    isPriority: 0
  };

  var request = require("request");
  var options = {
    method: "POST",
    url: "http://localhost/api/schedule",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json"
    },
    formData: fData
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
  res.redirect("/");
});

function getFormatDate(date) {
  (month = "" + (date.getMonth() + 1)),
    (day = "" + date.getDate()),
    (year = date.getFullYear());

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
