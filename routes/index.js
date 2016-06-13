var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
var Sequelize = require('sequelize');

var Boards = connection.define('boards', {
  board_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }
});

// GET action
router.get('/', function(req, res, next) {

  connection.sync().then(function() {
    return Boards.findAndCountAll();
  }).then(function(result) {

    res.render('index', {
      title: 'node start',
      boardList: result.rows
    });

  });

  // var query = 'SELECT *, DATE_FORMAT(createdAt, \'%Y年%m月%d日 %k時%i分%s秒\') AS createdAt FROM boards';
  // connection.query(query, function(err, rows) {
  //   res.render('index', {
  //     title: 'node start',
  //     boardList: rows
  //   });
  // });
});

//Post action
router.post('/', function(req, res, next) {
  var sendTitle = req.body.title;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

  connection.query('INSERT INTO boards SET ?', {title: sendTitle,created_at:createdAt},function(err, rows) {
    res.redirect('/');
  });

});

module.exports = router;
