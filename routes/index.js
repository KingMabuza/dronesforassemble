/* jshint esversion:8 */

let express = require('express');
let router = express.Router();
let db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.query(
    "SELECT name FROM drones",
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.render("index", { title: "Express" });
    }
  );
  
});

module.exports = router;
