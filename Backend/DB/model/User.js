import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    age : Number,
    confirmemail : {
        type : Boolean,
        default : true
    }
}, {
    timestamps : true
})
const userModel = mongoose.model('User', userSchema)
export default userModel