import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    deletedAt : {
        type : Boolean,
        default : true
    }
}, {
    timestamps : true
})
const blogModel = mongoose.model('Blog', blogSchema)
export default blogModel