import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const allowedOrigins = [
  'http://localhost:5173',  // Vite dev
  'https://mypaaltu-production-1.vercel.app'  // Vercel prod
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));



app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({limit:"16kb",extended:true}))

app.use(express.static("public")) 

app.use(cookieParser())

import userRouter from "./routes/user.routes.js"
// import contactUsRouter from "./routes/contactUs.routes.js"
import contactUsRouter from "./routes/contact_us.routes.js"
import blogRouter from "./routes/blog_routes.js"


app.use("/api/v1/user",userRouter)
app.use("/api/v1/contactUs",contactUsRouter)
app.use("/api/v1/blog",blogRouter)

export {app}