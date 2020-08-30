var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var router = express.Router();



const User = require("../model/User")

// login page
router.get("/login",(req,res)=>{
	//res.send("Login Page after change");
	res.sendFile(__dirname+"/view/index.html");
});

// register page
router.get("/register",(req,res)=>res.send("Register Page"));


/*router.post("/register",(req,res)=>{
	const {name ,email ,password} = req.body;	
	
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
});*/

router.post("/register",(req,res)=>{
//	res.send("form submitted");
console.log(req.body);
/*	var obj = Object.keys(req.body);
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
	}*/
});
router.post("/login",(req,res)=>{
	console.log(req.body);
	var result;
	for (var k in req.body){
    result = JSON.parse(k)
	}
	console.log(result);
	const {email,password} = result;

	User.findOne({email:email , password:password})
			.then(user=>{
				if(user){
					res.json({
						status:200,
						msg:user
					});
					console.log(user);
				}else{
					res.json({
						email,
						password
					});
				const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }

				console.log(obj);
				}
			});
});
module.exports = router;