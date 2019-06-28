var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://database:27017/quoteDB';
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
  MongoClient.connect(url, function (err, client) {
    if (err) {
      console.log('ERROR');
      console.log(err);
      return false;
    } else {
      var db = client.db('quoteDB');
      var quotesCollection = db.collection('Quotes');

      quotesCollection.insertMany(data, function (err, res) {
        if (err) {
          console.log('ERROR INSERT');
          console.log(err);
          return false;
        };
        console.log("Data");
        client.close();
        return true;
      });
    }
  });

}

app.get('/apis/init-connection', function (req, res) {
  console.log('Initalizing DB...');
  let conn = setQuotes();
  res.send({
    'connection': conn
  });
});

app.get('/apis/quote/:id', function (req, res) {
  MongoClient.connect(url, function (err, client) {
    var db = client.db('quoteDB');
    var cursor = db.collection('Quotes').findOne({
      id: req.params.id
    }, function (err, result) {
      console.log(result)
      res.json(result);
      client.close();
    });
  });
});

var server = app.listen(3000, function () {
  console.log('LISTENING ON PORT 3000');
});
