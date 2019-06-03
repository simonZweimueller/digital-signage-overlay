/*
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/sendData", urlencodedParser, function(req, res) {
  // Prepare output in JSON format
  response = {
    start: req.body.start,
    end: req.body.end
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});*/

/*
var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/sendData", function(req, res) {
  // Prepare output in JSON format
  response = {
    start: req.query.start,
    end: req.query.end,
    screens: req.query.screens
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});*/

/*
var express = require("express");
var path = require("path");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: "/tmp/" }));
//var upload = multer({ dest: "./tmp" });
app.use(
  multer({
    dest: path.join(__dirname, "public/tmp")
  }).any()
);
//var multer = require("multer");
//var upload = multer({ dest: "./tmp" });
/*app.use(multer({ dest: "./tmp/" }).single("sendMessage")); 

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/sendData", function(req, res) {
  console.log(req.files.sendMessage.name);
  console.log(req.files.sendMessage.path);
  console.log(req.files.sendMessage.type);
  var file = __dirname + "/" + req.files.sendMessage.name;

  fs.readFile(req.files.sendMessage.path, function(err, data) {
    fs.writeFile(file, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploaded successfully",
          filename: req.files.messageImage.name,
          start: req.query.start,
          end: req.query.end
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});*/
/*
var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer({ dest: "uploads/" });

app.use(express.static("public"));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: "/tmp/" }));
//app.use(multer({ dest: "./tmp/" }).single("sendMessage"));

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
*/
/*
app.post("/sendData", function(req, res) {
  console.log(req.files.messageImage.name);
  console.log(req.files.messageImage.path);
  console.log(req.files.messageImage.type);
  var file = __dirname + "/" + req.files.messageImage.name;

  fs.readFile(req.files.messageImage.path, function(err, data) {
    fs.writeFile(file, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: "File uploaded successfully",
          filename: req.files.messageImage.name
        };
      }

      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});*/
/*
app.post("/sendData", upload.single("sendMessage"), function(req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

var cpUpload = upload.fields({ name: "sendMessage", maxCount: 1 });
app.post("/cool-profile", cpUpload, function(req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  console.log(req.files["sendMessage"][0]);
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
});*/

/*
var express = require("express");
var multer = require("multer");
var upload = multer({ dest: "tmp/" });

var app = express();


app.post("/process_get", upload.single("messageImage"), function(
  req,
  res,
  next
) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
});

app.post("/tmp/upload", upload.array("photos", 12), function(req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
});

var cpUpload = upload.fields([{ name: "messageImage", maxCount: 1 }]);
app.post("/cool-profile", cpUpload, function(req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['messageImage'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
});*/

/*
const express = require("express");
const multer = require("multer");
const upload = multer({
  dest: "uploads/" // this saves your file into a directory called "uploads"
});

const app = express();

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// It's very crucial that the file name matches the name attribute in your html
app.post("/sendData", upload.single("messageImage"), (req, res) => {
  res.redirect("/sendData");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});*/

var express = require("express");
var app = express();

var fs = require("fs");
var bodyParser = require("body-parser");
var busboy = require("connect-busboy");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.use(busboy());

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/sendData", function(req, res) {
  if (
    req.query.start != undefined &&
    req.query.end != undefined &&
    req.query.screens != undefined
  ) {
    data = {
      start: req.query.start,
      end: req.query.end,
      screens: req.query.screens
    };

    var allData = Object.assign(image, data);
    console.log(allData);
  }
  res.redirect("/");
});

app.post("/sendImage", urlencodedParser, function(req, res) {
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on("file", function(fieldname, file, filename) {
    var pathImg = "./files/" + filename + "";
    var path = (fstream = fs.createWriteStream(pathImg));
    file.pipe(fstream);
    fstream.on("close", function() {
      image = {
        path: pathImg
      };
      //res.redirect("/");
    });
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

/*
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index.htm", function(req, res) {
  res.sendFile(__dirname + "/" + "index.htm");
});

app.post("/sendData", urlencodedParser, function(req, res) {
  // Prepare output in JSON format
  response = {
    start: req.body.start,
    end: req.body.end
  };

  response = {
    test: "test1"
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});*/
