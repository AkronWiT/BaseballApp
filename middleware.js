module.exports = (req, res, next) => {
  res.header('X-Hello', 'World')
  var express = require("express");
  var bodyParser = require("body-parser");
  var app = express();
  app.use(bodyParser.json({limit: '300kb'}));
  next()
}