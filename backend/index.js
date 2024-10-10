import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"

dotenv.config();


const app = express();

const PORT = 8001;
const URI = process.env.MongoDB_URI;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

try {
    mongoose.connect(URI);
    console.log("MongoDB connected");
}catch(error){
    console.log("DB error occure : " + error);
}

app.use("/api/user",userRoute); 
app.use("/api/message",messageRoute);

app.listen(PORT,() => {
    console.log(`Server start at ${PORT}`)
});