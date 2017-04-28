var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  username: String,
  score: Number,

  stargazers_count: Number
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;