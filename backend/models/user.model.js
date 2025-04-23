import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"username is required field"],
        unique:true,
        trim:true,
    },
    phone_no:{
        type:Number,
        required:[true,"phone number is required field"]
    },
    email:{
        type:String,
        required:[true,"email is required field"],
        unique:true,
        trim:true,
    }

},{timestamps:true});

export const User = mongoose.model("User",userSchema);
