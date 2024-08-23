import express from "express";
import { config } from "dotenv";
const app = express();
config();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`your app is listening on port ${PORT}`));
