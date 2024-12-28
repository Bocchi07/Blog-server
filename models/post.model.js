import {Schema} from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema({
	user:{
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	coverImg: {
		type: String,
	},
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String
	},
	slug: {
		type: String,
		unique: true
	},
	description: {
		type: String,
	},
	content: {
		type: String,
		required: true
	},
	isFeatured:{
		type: Boolean,
		default: false
	},
	visitNum: {
		type: Number,
		default: 0
	}
}, {timestamps: true})

export default mongoose.model("Post", postSchema)