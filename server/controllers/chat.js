import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
import {Chat} from "../models/chat.js";
import { emitEvent } from "../utils/features.js";
import {ALERT,REFETCH_CHATS} from "../constants/events.js";

const newGroupChat = TryCatch(async(req,res,next)=>{
    const {name,members} = req.body;

    if (members.length<2){
        return next(new ErrorHandler("Group chat must have at least 3 members",400));
    }

    const allMembers = [...members,req.user];

    await Chat.create({
        name,
        groupChat: true,
        creator: req.user,
        members: allMembers
    })

    emitEvent(req,ALERT,allMembers,`Welcome to ${name} group`);
    emitEvent(req,REFETCH_CHATS,members);

    res.status(201).json({
        success: true,
        message: "Group Created",
    })

})

export {newGroupChat};