import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
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