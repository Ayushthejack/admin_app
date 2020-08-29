var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var router = express.Router();
var cors = require('cors');

const User = require("../model/User")

// login page
router.get("/login",(req,res)=>{
	//res.send("Login Page after change");
	res.sendFile(__dirname+"/view/index.html");
});

// register page
router.get("/register",(req,res)=>res.send("Register Page"));

router.post("/register",(req,res)=>{
//	res.send("form submitted");
//console.log(req.body);
	var obj = Object.keys(req.body);
//	console.log(obj[0]);
	var obj1
	obj.forEach((bee)=>{		
	 obj1 =JSON.parse(bee);
	console.log(obj1.email) ;
	});
	const {name ,email ,password} = obj1;	
	
	if(email=="" || password==""){
		res.json(req.body);
		//res.json({msg:"fill all the fields"});		
	}else{
		const newUser = new User({
			name,
			email,
			password
		});
		newUser.save();
//		console.log(newUser);
		res.json({newUser});
		//res.json({msg:"submitted"});
	}
});
router.post("/login",(req,res)=>{
	console.log(req.body);
	const {email,password} = req.body;


	User.findOne({email:email , password:password})
			.then(user=>{
				if(user){
					res.json({
						status:200,
						msg:user
					});
					res.json({
						"msg":"no"	
					});
					console.log(user);
				}else{
					res.send(req.body);
					console.log("not working");
				}
			});
});
module.exports = router;