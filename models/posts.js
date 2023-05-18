const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: true
    },
    likes: [mongoose.Schema.Types.ObjectId],
    user:{
        type: String,required: true
    }
}, {
    timestamps: true
})

const postSchema = new mongoose.Schema(
	{
		imageUrl: String,
        caption: String,
        likes: [mongoose.Schema.Types.ObjectId],
        comments: [commentSchema],

		user:  {
			type: mongoose.Schema.Types.Object,
			ref: 'User',
            required:true
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('PostMalone', postSchema)