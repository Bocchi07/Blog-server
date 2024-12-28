import express from "express"
import userRouter from "./user.route.js"
import commentRouter from "./comment.route.js"
import postRouter from "./post.route.js"

const appRouter = express.Router();

appRouter.use(userRouter);
appRouter.use(commentRouter);
appRouter.use(postRouter);

export default appRouter;
