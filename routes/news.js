var express = require("express");
var bodyParser = require('body-parser');
var router = express.Router();

router.get("/add_news",(req,res)=>res.send("Add News page"));

router.post("/add_news",(req,res)=>{
	console.log(req.body);
	res.send(req.body);
});


module.exports = router;