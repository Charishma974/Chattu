import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import chatRoute from "./routes/chat.js";
import adminRoute from "./routes/admin.js";
import { createUser } from "./seeders/user.js";
import { createGroupChats, createMessagesInAChat, createSingleChats } from "./seeders/chat.js";

dotenv.config({path: "./.env"});

const mongoURI = process.env.MONGO_URI
const port = process.env.PORT || 3000
const envMode = process.env.NODE_ENV.trim() || "PRODUCTION"
const adminSecretKey = process.env.ADMIN_SECRET_KEY || "adsasdsdfsdfsdfd";

connectDB(mongoURI);

// createMessagesInAChat("66714d37b009803582177997",50);

const app = express();

// Using Middleware Here
app.use(express.json());
app.use(cookieParser());

app.use("/user",userRoute);
app.use("/chat",chatRoute);
app.use("/admin",adminRoute);

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is running on port ${port} in ${envMode} Mode`);
})

export {envMode,adminSecretKey};