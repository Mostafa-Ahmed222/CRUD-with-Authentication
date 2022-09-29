import mongoose from "mongoose";

const connectDB = async ()=>{
    return await mongoose.connect(process.env.DBURL).then(()=>{
        console.log(`ConnectDB....... at ${process.env.DBURL}`);
    }).catch((err)=>{
        console.log(`Fail to connect....${err}`);
    })
}
export default connectDB