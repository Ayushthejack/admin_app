var express = require("express");

var router = express.Router();

const User = require("../model/User")

// login page
router.get("/login",(req,res)=>{
	res.send("Login Page after change");

});

// register page
router.get("/register",(req,res)=>res.send("Register Page"));

router.post("/register",(req,res)=>{
//	res.send("form submitted");
	const {name ,email ,password} = req.body;
	if(!name || !password){
		res.json({msg:"fill all the fields"});		
	}else{
		const newUser = new User({
			name,
			email,
			password
		});
		console.log(newUser);
		res.json({msg:"submitted"});
		newUser.save();		
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