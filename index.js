import express from "express"
import routes from "./routes/app.routes.js";
import connectDB from "./lib/connectDB.js";
import dotenv from "dotenv";
import User from "./models/user.model.js";
import postModel from "./models/post.model.js";
import Comment from "./models/comment.model.js";
import clerkRouter from "./routes/webhooks.route.js";

const app = express();

app.use("/webhooks", clerkRouter);
app.use(express.json());

dotenv.config();



app.listen(3000, () => {
	connectDB();
  console.log("Server is running on port 3000");
});

app.use(routes);

app.use((error, req, res, next) => {
	res.status(error.status || 500)

	res.json({
		message: error.message || "Something went wrong!",
		status: error.status,
		stack: error.status
	})
})

app.get("/", (req, res) => {
	res.status(200).send("Homepage")
})

