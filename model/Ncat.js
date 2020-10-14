const mongoose = require("mongoose");

const ncatSchema = mongoose.Schema({
	category :{
		type: String,
		require:true
	}
});

const Ncat = mongoose.model("Ncat",ncatSchema);

module.exports = Ncat;