const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
    {
		name: String,
		googleId: {
			type: String,
			required: true,
		},
		email: String,
		avatar: String,
		appearance:{type:String, default:"login"}
	},
	{
		timestamps: true,
	}
	
)

module.exports = mongoose.model('SocialUser', userSchema)
