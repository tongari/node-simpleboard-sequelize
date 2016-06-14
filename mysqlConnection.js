var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('bulletin_board', 'root', '', { host: '127.0.0.1',timezone : "+09:00" });

var Boards = sequelize.define('boards', {
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

var Messages = sequelize.define('messages', {
  message_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  board_id:Sequelize.INTEGER,
  message: Sequelize.TEXT,
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }
});

var connection = {
  sequelize:sequelize,
  Boards:Boards,
  Messages:Messages
};

// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'bulletin_board'
// };
//
// var connection = mysql.createConnection(dbConfig);

module.exports = connection;
