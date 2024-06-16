import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getMyChats, newGroupChat } from "../controllers/chat.js";

const app = express.Router();

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.post("/new",newGroupChat);

app.post("/my",getMyChats);

export default app;