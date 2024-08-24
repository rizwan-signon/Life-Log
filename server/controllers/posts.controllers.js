import mongoose from "mongoose";
import Post from "../models/posts.model.js";
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error.message);
  }
};

export const createPost = async (req, res, next) => {
  const postBody = req.body;
  try {
    const newPost = await new Post(postBody);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    next(error.message);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const postBody = req.body;
    // if (!mongoose.Types.ObjectId.isValid(_id))
    //   throw new Error("the id provided is not correct format");
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { ...postBody, postId },
      {
        new: true,
      }
    );
    if (!updatePost) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error.message);
  }
};
//add likepost functionality
export const likePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    const updateLikes = await Post.findByIdAndUpdate(
      postId,
      { likeCount: post.likeCount + 1 },
      {
        new: true,
      }
    );
    if (!updateLikes) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(updateLikes);
  } catch (error) {
    next(error.message);
  }
};
export const deletePost = async (req, res, next) => {
  const postId = req.params.id;
  try {
    const deletedPost = await Post.findOneAndDelete(postId);
    res.status(200).json({ message: "post deleted successfully" });
  } catch (error) {
    next(error.message);
  }
};
