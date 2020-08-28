const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
	category :{
		type: String,
		require:true
	},
	location :{
		type: String,
		require:true
	},
	heading :{
		type: String,
		require:true
	},
	keywords:[{
		type : String,
		require:true	
	}],
});

const News = mongoose.model('News',userSchema);

module.exports = News;