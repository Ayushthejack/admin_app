const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
	category :{
		type: String,
		required:true
	},
	location :{
		type: String,
		required:true
	},
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
	}],
});

const News = mongoose.model('News',userSchema);

module.exports = News;