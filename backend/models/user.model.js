import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password : {
        type : String,
        required : true,
    },
    confirmPassword : {
        type : String,
        require : true,
    }
}, {timestamps : true}) // create & updateAt

const User = mongoose.model("User",userSchema);

export default User;