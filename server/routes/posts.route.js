import { Router } from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.controllers.js";
const router = Router();
router.get("/posts", getPosts);
router.post("/post", createPost);
router.patch("/post/:id", updatePost);
router.delete("/post/:id", deletePost);
router.patch("/likes/:id", likePost);
export default router;
