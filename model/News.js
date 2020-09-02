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

		},
		passage:{
			type:String,

		},
		image:{
			type:String,

		}
	}],
	hitRate:{
		type:Number,
		default:0
	}
});

const News = mongoose.model('News',newsSchema);

module.exports = News;