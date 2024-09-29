import express from "express"
import { getUserProfile, login, logout, signup } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/login", login)
router.post("/logout", logout)
router.post("/signup", signup)
router.post("/profile", getUserProfile)

export default router