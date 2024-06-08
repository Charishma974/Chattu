import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config({path: "./.env"});

const mongoURI = process.env.MONGO_URI
const port = process.env.PORT || 3000

connectDB(mongoURI);

const app = express();

// Using Middleware Here
app.use(express.json());

app.use("/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})