import { TryCatch } from "../middlewares/error.js";
import {User} from "../models/user.js";
import {Chat} from "../models/chat.js";
import {cookieOptions, sendToken} from "../utils/features.js";
import {compare} from "bcrypt";
import { ErrorHandler } from "../utils/utility.js";

// Create a new user and save it to the database and save token in cookie
const newUser = async (req, res) => {

    const {name,username,password,bio} = req.body;

    const avatar = {
        public_id: "Sdfsd",
        url: "asdfd"
    }

    const user = await User.create({
        name,
        bio,
        username,
        password,
        avatar
    })

    sendToken(res,user,201,"User created");
}

// Login user and save token in cookie
const login = TryCatch(async (req, res,next) => {

    const {username,password} = req.body;

    const user = await User.findOne({username}).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Username or Password",404));

    const isMatch = await compare(password,user.password);

    if (!isMatch) return next(new ErrorHandler("Invalid Username or Password",404));

    sendToken(res,user,200,`Welcome Back, ${user.name}`);

})

const getMyProfile = TryCatch(async (req,res) => {
    const user = await User.findById(req.user);

    res.status(200).json({
        success: true,
        user,
    })
})

const logout = TryCatch(async (req,res) => {
    res.status(200).cookie("chattu-token","",{...cookieOptions,maxAge: 0}).json({
        success: true,
        message: "Logged out successfully.",
    })
})

const searchUser = TryCatch(async(req,res)=>{
    const {name=""} = req.query;

    // Finding All my chats
    const myChats = await Chat.find({groupChat: false,members: req.user});

    // All Users from my chats means friends or people I have chatted with
    const allUsersFromMyChats = myChats.flatMap((chat)=>chat.members);

    // Finding all users except me and my friends
    const allUsersExceptMeAndFriends = await User.find({
        _id: {$nin: allUsersFromMyChats},
        name: {$regex: name,$options: "i"},
    });

    // Modifying the response
    const users = allUsersExceptMeAndFriends.map(({_id,name,avatar})=>({
        _id,name,
        avatar: avatar.url,
    }))

    return res.status(200).json({
        success: true,
        users,
    })
})

export { login, newUser,getMyProfile,logout,searchUser };