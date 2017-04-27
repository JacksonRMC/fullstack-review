var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Repo = require('../database/index.js');
var data = require('../data.json');


var app = express();


app.use(express.static(__dirname + '/../client/dist'));
//app.use(bodyParser.json())

app.post('/repos/import', function (req, res) {
  console.log(data[0].id)
  // app.get('http://api.github.com/users/jacksonrmc?access_token=a5516cdd9ef06a2129d482121880bf2d1a3ddf98',
  //   (req, res) => {
      
  //   })
 // 'http://api.github.com/users/{USERNSAME}?access_token=a5516cdd9ef06a2129d482121880bf2d1a3ddf98'
 // 'http://api.github.com/users/{USERNSAME}/repos?access_token=a5516cdd9ef06a2129d482121880bf2d1a3ddf98'
  res.send(data)
  
});

app.get('/repos', function (req, res) {

  res.end()
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

