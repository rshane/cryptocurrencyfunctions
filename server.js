import apiRouter from './api';
var express = require("express");
var cors = require('cors');
const server = express();
server.set('view engine', 'ejs');
server.use(cors());
server.use(function(req, res, next){
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
server.use('/api', apiRouter);

server.get("/", (req, res) => {
  res.render('index', {
    content: 'Hello Express and EJS!'
  });
})

server.get("/test-api", function(req, res){

});
server.use(express.static("./public"));
server.listen(8080);

console.log("Express app running on port 8080");

module.exports = server;
