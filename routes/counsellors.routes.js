import { addCounsellors, deleteCounsellor, editCounsellor, fetchSingleCounsellor, getAllCounsellors } from "../controllers/counsellors.controller.js"
import express from "express"

const router = express.Router()



router.post("/add",addCounsellors)
router.get("/all", getAllCounsellors)
router.get("/:id", fetchSingleCounsellor)
router.put("/editCounsellor/:id", editCounsellor)
router.delete("/deleteCounsellor/:id", deleteCounsellor)

export default router
