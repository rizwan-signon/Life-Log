import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./utils/connectDb.js";
const app = express();
config();
connectDb();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.listen(PORT, () => console.log(`your app is listening on port ${PORT}`));
