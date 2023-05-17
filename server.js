const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("server started at 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);
  res.send(`your bmi is : ${bmi}`);
});
