import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

const connectDB = async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGOdb connected !! DB HOST : ${connectionInstance.connection.host}`);
        
    } catch (error) {

        console.log("MONGOdb connection error",error);
        
    }
}
    
export default connectDB