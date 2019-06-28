var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/quoteDB';
var str = "";

setQuotes = function () {
  var data = [{
      statement: 'The book is in front of the table.',
      id: 1
    },
    {
      statement: 'The sky was deep dark blue in color.',
      id: 2
    },
    {
      statement: 'A glittering gem is not enough for.',
      id: 3
    },
    {
      statement: 'Do not step on the broken glass',
      id: 4
    },
    {
      statement: 'It was getting dark, and we weren’t there yet.',
      id: 5
    }
  ]
  MongoClient.connect(url, function (err, db) {
    var quotesCollection = db.collection('Quotes');

    quotesCollection.insertMany(data, function (err, res) {
      if (err) throw err;
      console.log("Data");
      db.close();
    });
  });

}

app.get('/apis/quote/:id', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var cursor = db.collection('Quotes').findOne({
      id: req.params.id
    }, function (err, result) {
      console.log(result)
      res.json(result);
      db.close();
    });
  });
});

var server = app.listen(3000, function (req, res) {
  comsole.log('Initalizing DB...');
  setQuotes();
  console.log('LISTENING ON PORT 3000');
});
