import { registerUser } from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/register", registerUser);

export default router;
