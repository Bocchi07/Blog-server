import Comment from "../models/comment.model.js"

export const getComment = async (req, res) => {
	const comment = new Comment({
		user: "Jeaven",
		post: "Jeaven",
		description: "Jeaven"
	})

	comment.save()
		.then(result => res.json(result))
		.catch(err => console.log(err))
}