import bcrypt from "bcrypt";
import User from "../models/user.model.js";
export const registerUser = async (req, res, next) => {
  const { password, ...rest } = req.body;
  try {
    if (!password || !rest) throw new Error("all fields required");
    const newUser = await User({
      ...rest,
      password: bcrypt.hashSync(password, 10),
    });
    res.status(200).json(newUser);
  } catch (error) {
    next(error.message);
  }
};
