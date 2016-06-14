var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
var Boards = connection.Boards;

// GET action
router.get('/', function(req, res, next) {

  Boards.findAndCountAll()
    .then(function(result) {
      res.render('index', {
        title: 'node start',
        boardList: result.rows
      });
    });

});

//Post action
router.post('/', function(req, res, next) {

  var sendTitle = req.body.title;

  Boards.create({
    title:sendTitle
  })
    .then(function(result) {
      console.log(result.get({plain:true}));
      res.redirect('/');
    });

});

module.exports = router;
