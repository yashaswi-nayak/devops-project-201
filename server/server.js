var express = require('express');
var api = express();
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/quoteDB';
var str = "";
var router = express.Router();

setQuotes = function () {
  var data = [{
      statement: 'The book is in front of the table.',
      qid: 1
    },
    {
      statement: 'The sky was deep dark blue in color.',
      qid: 2
    },
    {
      statement: 'A glittering gem is not enough for.',
      qid: 3
    },
    {
      statement: 'Do not step on the broken glass',
      qid: 4
    },
    {
      statement: 'It was getting dark, and we weren’t there yet.',
      qid: 5
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
        console.log("Data", res);
        return true;
      });
    }
  });

}


router.get('/init-connection', function (req, res) {
  console.log('Initalizing DB...');
  let conn = setQuotes();
  res.send({
    'connection': conn
  });
});

router.get('/quote/:qid', function (req, res) {
  console.log(req.params);
  MongoClient.connect(url, function (err, client) {
    if (err) {
      console.log('ERROR CONNECTION');
      console.log(err);
    }
    var db = client.db('quoteDB');
    var collection = db.collection('Quotes');
    var cursor = collection.findOne({
      "qid": req.params.qid
    }, function (err, result) {
      if (err) {
        console.log('ERROR FETCH');
        console.log(err);
      }
      console.log(result)
      res.json(result);
    });
  });
});


api.use('/apis', router);

var httpServer = http.createServer(api);

httpServer.listen(3000, function () {
  console.log('LISTENING ON PORT 3000');
});
