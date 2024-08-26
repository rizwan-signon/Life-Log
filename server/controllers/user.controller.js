import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const registerUser = async (req, res, next) => {
  const { password, ...rest } = req.body;
  try {
    if (!password || !rest) throw new Error("all fields required");
    const newUser = await User({
      ...rest,
      password: bcrypt.hashSync(password, 10),
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error.message);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw new Error("all fields required");
    const validUser = await User.findOne({ email });
    const validPass = bcrypt.compareSync(password, validUser.password);
    if (!validUser || !validPass) throw new Error("wrong credentils");
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("jwt", token, {
        maxAge: 60 * 60 * 24 * 3 * 1000,
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    res.json(error.message);
  }
};
