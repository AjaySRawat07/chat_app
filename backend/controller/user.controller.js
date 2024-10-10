import { createTokenAndSaveCookie } from "../jwt/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signUp = async(req, res) => {
    try {
    const {fullname,email,password,confirmPassword} = req.body;

    if(password !== confirmPassword){
        return res.status(400).json({ error : "Passwords don't match" });
    }
    const user = await User.findOne({ email });
    if(user){
        return res.status(400).json({ error : "User already registered" });
    }

    // Hashing the password
    const hashingPassword  = await bcrypt.hash(password, 10); //10 unknown decrypted digits
    const newUser = await new User({
        fullname,
        email,
        password : hashingPassword,
    })
    await newUser.save();
    if(newUser){
        createTokenAndSaveCookie(newUser._id,res);
        res.status(201).json({message : "User create successfully!!",newUser});
    }
    }catch(error){
        console.log("User signup error" , error);
    }
}   

export const login = async(req,res) => {
    const {email,password} = req.body;
    try{
        const user = await User.findOne({ email });
        const isMarch = await bcrypt.compare(password, user.password);
        if( !user || !isMarch){
            return res.status(400).json({ error : "Invalid user credential" });
        }
        createTokenAndSaveCookie(user._id,res);
        res.status(201).json({
            message : "User logged in successfully",
            user : {
                id : user._id,
                username : user.fullname,
                email : user.email,
            }
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error : "Internal server error"});
    }
}

export const logout = async(req,res) =>{
    try{
        res.clearCookie("jwt");
        res.status(201).json({error : "user logout successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error : "Internal server error"});
    }
}

export const allUsers = async(req,res) =>{
    try{
        const loggedInUser = req.user.id;
        const filterUsers = await User.find({
            id: {$ne : loggedInUser},
        }).select("-password");
        res.status(201).json(filterUsers);
    }catch(err){
        console.log("Error at allUsers controllers" + err);
    }
}