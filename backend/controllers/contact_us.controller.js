import { ContactUs } from "../models/contact_us.model.js";
const contactUsController = async (req, res) => {

    // get details from frontend
    // check whether the details are present or not
    // check whether user already exists or not 
    // if user already exists then send error message
    // if user does not exists then create a new user and send success message

    const {username, phone_no, email, message} = req.body;

    if (!username || !phone_no || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the details"
        })
    }

    console.log("Received contact data:", req.body);

    const user = await ContactUs.findOne({$or:[{username},{email}]});

    if(user)
    {
        return res.status(400).json({
            success: false,
            message: "User already exists"
        })
    }

    const newUser = await ContactUs.create({username, phone_no, email, message});

    if(!newUser) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

    console.log("Contactus controller hit successfull");
    

    return res.status(201).json({
        success: true,
        message:"User created successfully",
        user: newUser
    })


}

export {contactUsController}