const mysql = require("mysql");
const config = require("../../../config");

const mysqlConnection = mysql.createConnection(config.db);

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    throw err;
  }

});

module.exports = mysqlConnection;
