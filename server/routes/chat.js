import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, deleteChat, getChatDetails, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMember, renameGroup, sendAttachments } from "../controllers/chat.js";
import { attachmentsMulter } from "../middlewares/multer.js";

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
app.post("/message",attachmentsMulter,sendAttachments);

// Get Messages

// Get Chat Details, rename, delete
app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteChat);

export default app;