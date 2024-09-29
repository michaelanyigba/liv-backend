import express from "express"
import { addArticles, deleteArticle, editArticle, fetchSingleArticle, getAllArticles } from "../controllers/articles.controller.js"

const router = express.Router()



router.post("/add",addArticles)
router.get("/all",getAllArticles)
router.get("/:id",fetchSingleArticle)
router.put("/editArticle/:id",editArticle)
router.delete("/deleteArticle/:id",deleteArticle)

export default router