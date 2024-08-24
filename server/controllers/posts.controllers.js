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
    const { id: _id } = req.params.id;
    const postBody = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      throw new Error("the id provided is not correct format");
    const updatedPost = await Post.findByIdAndUpdate(_id, postBody, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error.message);
  }
};
