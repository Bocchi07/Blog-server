import express from "express";
import User from "../models/user.model.js"

const router = express.Router();

router.get("/user", async (req,res)=> {
	// try{
	// 	const user = new User
	// }catch(err){

	// }

	User.find()
		.then(result => res.json(result))
		.catch(err => console.log(err))

	// res.status(200).send("User route")
})

export default router