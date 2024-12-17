import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/auth", authRoute);
app.use(cookieParser);

app.listen(PORT, () => {
  console.log(`server is running on Port:${PORT}`);
  connectDB();
});
