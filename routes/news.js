var express = require("express");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json()
 
const News = require("../model/News");
var router = express.Router();

router.get("/add_news",(req,res)=>res.sendFile(__dirname+"/view/addNews.html"));

router.post("/add_news",(req,res)=>{
	console.log("This is news Page");
	console.log(req.body);
	res.send(req.body);
	const {category} = req.body;

		const newNews = new News({
				category
			});
		newNews.save();

});

module.exports = router;