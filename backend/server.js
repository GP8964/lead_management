import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import leadRoutes from "./routes/leadRoutes.js";


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", leadRoutes);


mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


app.listen(4000, () => console.log("Backend running on port 4000"));