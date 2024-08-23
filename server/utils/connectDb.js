import mongoose from "mongoose";

export const connectDb = () => {
  const mongoUrl = process.env.MONGO_URL;
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("mongo db connected successfully"))
    .catch((error) => console.log(error));
};
