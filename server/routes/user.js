import express from "express";
import { getMyProfile, login, logout, newUser ,searchUser} from "../controllers/user.js";
import {multerUpload, singleAvatar} from "../middlewares/multer.js"
import { isAuthenticated } from "../middlewares/auth.js";
import { loginValidator, registerValidator, validateHandler } from "../lib/validators.js";

const app = express.Router();

app.post("/new",singleAvatar,registerValidator(),validateHandler, newUser);
app.post("/login",loginValidator(),validateHandler, login)

// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.get("/me",getMyProfile);

app.get("/logout",logout);

app.get("/search",searchUser);

export default app;