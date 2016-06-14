var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');
var Boards = connection.Boards;
var Messages = connection.Messages;

//Get action
router.get('/:board_id', function(req, res, next) {

  var boardId = req.params.board_id;
  var boardsData;
  var messagesData;

  Boards.find({
    where:['board_id=?',boardId]
  })
    .then(function(result) {
      boardsData = result;

      return Messages.findAll({
        where: {board_id: boardId}
      })
    })
    .then(function (result) {
      messagesData = result;

      res.render('board', {
        title: boardsData.title,
        board: boardsData,
        messageList: messagesData
      });
    });
});

//Post action
router.post('/:board_id',function (req,res,next) {

  var boardId = req.params.board_id;
  var sendMessage = req.body.message;

  Messages.create({
    board_id:boardId,
    message:sendMessage
  })
    .then(function(result) {
      res.redirect('/boards/'+boardId);
    });

});

module.exports = router;
