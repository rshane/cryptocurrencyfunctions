var express = require("express");
var app = express();
var cors = require('cors');
app.use(function(req, res, next){
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
app.use(expres.static("./public"));
app.use(cors());
app.get("/test-api", function(req, res){

});
app.listen(8080);

console.log("Express app running on port 8080");

module.exports = app;
