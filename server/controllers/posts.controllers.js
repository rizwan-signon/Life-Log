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
  const { title } = req.body;
  try {
    const newPost = await new Post({ title });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    next(error.message);
  }
};
