var express = require("express");
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


var router = express.Router();
const User = require("../model/User");

// login page
router.get("/login",(req,res)=>{
	//res.send("Login Page after change");
	res.sendFile(__dirname+"/view/index.html");
});

// register page
router.get("/register",(req,res)=>res.send("Register Page"));


//register API for app
router.post("/register",(req,res)=>{
//	res.send("form submitted");
const {email , password ,name } = req.body;

		if(!email || !password){
		//res.json(req.body);
		res.json({msg:"fill all the fields"});		
		}else{
			const newUser = new User({
				name,
				email,
				password
				});
			newUser.save();
			res.json({newUser})
		}	

});

//login API for app
router.post("/login",(req,res)=>{
	console.log(req.body);
	const {email,password} = req.body;

	User.findOne({email:email , password:password})
			.then(user=>{
				if(user){
					res.json({
						status:200,
						msg:"Successfully login"
					});
					console.log(user);
				}else{
					res.json({
						msg:"Invalid username and password"
					});
				}
			});
});
module.exports = router;



/*<-------------------------------------END OF MAIN CODE---------------------------------------------->*/




//register api for future purpose

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

	// some useful  code