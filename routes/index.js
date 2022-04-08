/* jshint esversion:8 */

let express = require('express');
let router = express.Router();
let db = require('../db');

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./api.yaml");

router.use("/apis", swaggerUi.serve, swaggerUi.setup(swaggerJSDocs));





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

router.get("/drones", (req, res) => {
  db.query("SELECT name FROM drones", function (error, results, fields) {
    if (error) throw error;
    return res.status(200).send({ data: results });
  });
});

router.get("/packages", (req, res) => {
  db.query(
    "SELECT name, distance FROM packages",
    function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send({ error: false, data: results });
    }
  );
});

router.post("/add/drone", (req, res) => {
  let result = req.body.name;
  let sql =
    "INSERT INTO `drones`(`name`,`fuel`, `status`) VALUES ('" +
    req.body.name +
    "','" +
    100 +
    "','" +
    "idle" +
    "')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("data added");
  });
  return res.status(201).send({ name: result });
});

router.post("/add/packages", (req, res) => {
  let result = req.body.name;
  console.log(result);
  let n = result.split(",");
  console.log(n);
  
  let sql =
    "INSERT INTO `packages`(`name`) VALUES ('" +
    req.body.name +
    "')";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("data added");
  });
  return res.status(201).send({ name: result });
});


module.exports = router;
