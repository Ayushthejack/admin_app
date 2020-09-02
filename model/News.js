const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
	category :[{
			type : String,
			required:true
	}],
	location :[{
		country :{
			type: String,
			required:true
		},
		state:{
			type: String,

		},
		district:{
			type: String,

		},
		city:{
			type: String,

		}
	}],

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
		},
		image:{
			type:String,
			required:true
		}
	}],
	hitRate:{
		type:Number,
		default:0
	}
});

const News = mongoose.model('News',newsSchema);

module.exports = News;