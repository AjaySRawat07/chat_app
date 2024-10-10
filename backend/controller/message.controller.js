import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req,res) =>{
    // console.log("Message send",req.params.id,req.body.message);
    try{
        const { message } = req.body;
        const { id : reciverId } = req.params;
        const senderId = req.user._id; // current logged in user
        let conversation = await Conversation.findOne({
            members : { $all : [senderId, reciverId]},
        });
        if(!conversation){
            conversation = await Conversation.create({
                members : [senderId , reciverId],
            });
        }
        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        })    
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(),newMessage()]);
        res.status(201).json({
            message : "Message send successfully",
            newMessage
        })
    }
    catch(err){
        console.log("Error is sendMessage",err);
        res.status(500).json({err : "Internal server error"});
    }
}