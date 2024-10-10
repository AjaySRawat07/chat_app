import express from "express";
import { allUsers, login, logout, signUp } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signUp",signUp)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allUsers", secureRoute, allUsers)

export default router;
