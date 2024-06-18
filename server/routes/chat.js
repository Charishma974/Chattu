import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMember } from "../controllers/chat.js";

const app = express.Router();

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.post("/new",newGroupChat);

app.post("/my",getMyChats);

app.get("/my/groups",getMyGroups);

app.put("/addmembers",addMembers);

app.put("/removemember",removeMember);

app.delete("/leave/:id",leaveGroup);

// Send Attachments

// Get Messages

// Get Chat Details, rename, delete

export default app;