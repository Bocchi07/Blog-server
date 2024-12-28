import {Schema} from "mongoose";
import mongoose from "mongoose";

const commentSchema = new Schema({
	user: {
		type: String,
		// type: Schema.Types.ObjectId,
		// ref: "User",
		required: true
	},
	post: {
		type: String,
		// type: Schema.Types.ObjectId,
		// ref: "Post",
		required: true
	},
	description: {
		type: String,
		required: true
	}
}, {timestamps: true})

export default mongoose.model("comment", commentSchema)