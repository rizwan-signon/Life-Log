import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./utils/connectDb.js";
import postRoutes from "./routes/posts.route.js";
import { error } from "./middlewares/error.js";
const app = express();
config();
connectDb();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);
app.use(error);
app.listen(PORT, () => console.log(`your app is listening on port ${PORT}`));
