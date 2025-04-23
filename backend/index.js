import express from 'express';
import { app } from './app.js';
import cookieParser from 'cookie-parser';
// const app = express();

import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();

// configuring middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

connectDB()
.then(()=>{
    app.listen((process.env.PORT || 3000),()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
        
    })

    app.get("/",(req,res)=>{
        res.send("Hello World")
    })

})
.catch((err)=>{
    console.log(`MONGOdb connection failse ${err}`)
})