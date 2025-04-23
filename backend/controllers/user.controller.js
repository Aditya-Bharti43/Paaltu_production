import { User } from "../models/user.model.js";

const userController = async (req,res)=>{
    const {username,phone_no,email} = req.body;
    if(!username || !phone_no || !email){
        return res.status(400).json({
            success:false,
            message:"Please provide all the details"
        })
    }
    console.log("Received data:", req.body);
    
    const user = await User.findOne({$or:[{username},{email}]});

    if(user)
    {
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }

    const newUser = await User.create({username,phone_no,email});

    if(!newUser)
    {
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }

    console.log("User added successfully");

    return res.status(201).json({
        success:true,
        message:"User created successfully",
        user:newUser
    })
  
    
}


export {userController}