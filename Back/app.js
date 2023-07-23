"use strict";

var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 4201;

var server = require("http").createServer(app);


mongoose.connect("mongodb://127.0.0.1:27017/Movies", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    server.listen(port, function () {
      console.log("servidor corriendo en el puerto" + port);
    });
  }
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

module.exports = app;
