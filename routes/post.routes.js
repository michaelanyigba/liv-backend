import { deletePost, fetchSinglePost, getPost, Post, updatePost } from "../controllers/post.controller.js"
import express from "express"

const router = express.Router()



router.post("/add",Post)
router.get("/get-post", getPost)
router.get("/:id", fetchSinglePost)
router.put("/editPost/:id", updatePost)
router.delete("/deletePost/:id", deletePost)


export default router