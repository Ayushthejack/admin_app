const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
	category :{
		type: String,
		required:true
	},
	location :[
		country :{
			type: String,
			required:true
		},
		state:{
			type: String,
			required:true		
		},
		district:{
			type: String,
			required:true
		},
		city:{
			type: String,
			required:true
		}
	],
	heading :{
		type: String,
		required:true
	},
	keywords:[{
		type : String,
		required:true	
	}],
	text:[{
		subheading:{
			type:String,
			required : true
		},
		passage:{
			type:String,
			required:true
		}
	}]
});

const News = mongoose.model('News',newsSchema);

module.exports = News;