import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
	const posts = await Post.find();
	res.status(200).json(posts)
}

export const getPost = async (req, res) => {
	const post = await Post.findOne({slug: req.params.slug});
	res.status(200).json(post)
}

export const createPost = async (req, res) => {
	const newPost = await new Post(req.body);
	const post = newPost.save();

	res.status(200).send(post)

}

export const deletePost = async (req, res) => {
	const post = await Post.findByIdAndDelete(req.params.id)

	res.status(200).json(`post is deleted`)
}