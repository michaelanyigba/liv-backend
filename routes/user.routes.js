import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { deleteUser, getAllUsers, getOnlyAdmin, getSingleUser, getUsersForSidebar, updateUser } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)
router.get("/all", getAllUsers)
router.get("/admin", getOnlyAdmin)
router.get("/find/:id", getSingleUser)
router.put("/update/:id", updateUser)
router.delete("/deleteUser/:id", deleteUser)


  

export default router;