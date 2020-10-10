var express = require("express");
var app = express();
const fs = require('fs');
const mime = require('mime');
const bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false ,limit:'50mb'}));
  
// parse application/json
app.use(bodyParser.json({limit:'50mb'}));

 
const News = require("../model/News");
var router = express.Router();

router.get("/add_news",(req,res)=>res.sendFile(__dirname+"/view/addNews.html"));

// array to store name of images uploaded in folder
		var filenames = [];
// function to upload files
	function saveImages(item) {
		if(item.image){

	var matches = item.image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
		console.log(matches[1]);
	response = {};
	response.type = matches[1];
	//getting extension
	let extension = mime.getExtension(response.type);
	console.log("This is Extension "+ extension);
	response.data = Buffer.from(matches[2], 'base64');
	var filename = Date.now()+'.'+ extension;
	fs.writeFile('./uploads/news_images/'+ filename, response.data, (err, response)=> {
            if(err) {
                     res.send(err);
            } else {
                    console.log('uploaded');
            }
    	});
	item.image = filename;
		}
	}		
// add news API
router.post("/add_news",(req,res)=>{
	console.log("This is news Page");
//  console.log(req.body);
// 	obj = req.body.article;

	var obj = req.body;
	var	news = {};

	news.category =obj.category;
	news.location = obj.location;
	news.heading = obj.heading;
	news.keywords = obj.keywords;
	news.text = obj.text;
	news.text.forEach(saveImages);

/*	res.send(obj);
	console.log(obj);*/

// db insert
	const newNews = new News(news);
	newNews.save();
	res.json(newNews)
	console.log(newNews);	
});


// load all news from db API
router.get("/load_news",(req,res)=>{
	News.find().then(news=>{
				if(news){
					res.json({
						status:200,
						news : news
					});
					console.log(news);
				}
			});
});	


module.exports = router;