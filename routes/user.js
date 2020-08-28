var express = require("express");

var router = express.Router();

const User = require("../model/User")

// login page
router.get("/login",(req,res)=>{
	res.send("Login Page after change");

});

// register page
//router.get("/register",(req,res)=>res.send("Register Page"));

router.get("/register",(req,res)=>{
//	res.send("form submitted");
	const {name ,email ,password} = req.body;
	console.log(req.params);
	if(req.body.email=="" || req.body.password==""){
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
	//	res.json({newUser});
		res.json({msg:"submitted"});
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
						msg:"Login Succeessfully c"
					});
					console.log(user);
				}
			});
});

module.exports = router;