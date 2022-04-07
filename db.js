/*jshint esversion: 8 */

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "wb39lt71kvkgdmw0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "kb2jwcdqwbupxsrm",
  password: "x0qzp3r27rx9g6tz",
  database: "vinby8wi80pl75sv",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection; 