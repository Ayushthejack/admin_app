var express = require("express");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = express.Router();

router.get("/add_news",(req,res)=>res.send("Add News page"));

router.post("/add_news",(req,res)=>{
	console.log(req.body);
	res.send(req.body);
});

module.exports = router;