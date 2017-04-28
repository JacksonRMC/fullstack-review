var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Repo = require('../database/index.js');
var data = require('../data.json');
var request = require('request');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}));




app.post('/repos/import', function (req, res) {
  console.log(req.body.term)
  var username = req.body.term;


  var options = { 
    url: `http://api.github.com/users/${username}/repos`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'jacksonrmc',
        'authorization': `token a5516cdd9ef06a2129d482121880bf2d1a3ddf98`
    }
  };
  
  request(options, function (error, response, body) {
    console.log('error:', error); 
    if (error) {
      throw (error)
    }
    var y = JSON.parse(response.body);
    
    var obj = {
    	username: username,	
    	score: y[0].size,
    	stargazers_count: y[0].stargazers_count
    };
    

    var user = new Repo(obj)
    user.save(function(err, user) {
    	if(err) {
    		console.error(err)
    	}
    })

    console.log(obj)
  });
  //pull out an array of users and put them up on the users board
  res.send('Repos added')
  
});

app.get('/repos', function (req, res) {
	
	var array = [];
	if(req.err) {
		console.log(req.err)
	} 
	
	res.send(
	Repo.find((err, repolist) => {
		if(err) console.error(err)
		console.log('me 1')
		array = repolist;
	}))
	
	console.log('me 2')
		
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

