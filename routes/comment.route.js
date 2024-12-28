import express from "express";
import {getComment} from "../controllers/comment.controllers.js"

const router = express.Router();

router.get("/comment", getComment)

export default router;