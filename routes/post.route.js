import express from "express";
import {getPosts, getPost, createPost, deletePost} from "../controllers/post.controllers.js"

const router = express.Router()

router.get("/posts", getPosts)
router.get("/post", getPost)
router.post("/posts", createPost)
router.delete("/posts/:id", deletePost)

export default router;