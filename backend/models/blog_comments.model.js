import mongoose,{Schema} from "mongoose";

const blog_comments = new Schema({

    comment:{
        type:String,
        // required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    website:{
        type:String,
        // required:true,
    },
},{timestamps:true})

export const BlogComments = mongoose.model("BlogComments",blog_comments);