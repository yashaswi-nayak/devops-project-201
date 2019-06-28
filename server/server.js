var express = require('express');
var api = express();
var http = require('http');
var mongoose = require('mongoose');
var url = 'mongodb://database:27017/';
var str = "";
var router = express.Router();

var QuoteSchema = mongoose.Schema({
  qid: Number,
  statement: String
});

var Quote = mongoose.model('Quote', QuoteSchema, 'Quote');

mongoose.connect(url, function (err, conn) {
  if (err) {
    console.error(err);
  }
  console.log('Connected ' + url);
  console.log(conn)
});

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



  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function () {
    console.log("Connection Successful!");

    Quote.collection.insert(data, function (err, docs) {
      if (err) {
        console.error(err);
        return false;
      } else {
        console.log("Multiple documents inserted to Collection");
        console.log(docs);
        return true;
      }
    });
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

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function () {
    console.log("Connection Successful!");

    Quote.collection.findOne({
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
