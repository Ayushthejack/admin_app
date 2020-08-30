var express = require("express");
var cors = require('cors');
var mongoose = require("mongoose");
const mongodbURL ="mongodb+srv://ayush:ayush123@cluster0.lbv52.mongodb.net/users?retryWrites=true&w=majority"; 
mongoose.connect(mongodbURL,{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection
		.once("open",()=>console.log("connected"))
		.on("error",error=>{
			console.log("error");
		});
var app = express();

app.use(cors({
    origin:"*"
}));
//body parser 
app.use(express.urlencoded({extended: false}));
//Routes
app.use('/',require('./routes/index')); 
//user routes
app.use('/user',require('./routes/user'));
//news routes
app.use('/news',require('./routes/news'));

var PORT = 5000||process.env.PORT||process.env.IP;

app.listen(PORT,()=>{
	console.log("Server started at 5000");
});