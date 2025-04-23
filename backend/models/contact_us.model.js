import {mongoose} from 'mongoose';
import {Schema} from 'mongoose';

const contactUsSchema = new Schema({

    // name ,phone,email,message
    username:{
        type:String,
        required:[true,"username is required field"],
        trim:true,
    },
    phone_no:{
        type:Number,
        required:[true,"phone number is required field"]
    },
    email:{
        type:String,
        required:[true,"email is required field"],
        trim:true,
    },
    message:{
        type:String,
        required:[true,"message is required field"],
        trim:true,
    }
},{timestamps:true});

export const ContactUs = mongoose.model("ContactUs",contactUsSchema);