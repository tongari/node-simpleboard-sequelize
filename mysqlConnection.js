var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('bulletin_board', 'root', '', { host: '127.0.0.1',timezone : "+09:00" });

var connection = sequelize;

// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'bulletin_board'
// };
//
// var connection = mysql.createConnection(dbConfig);

module.exports = connection;
