import express from "express";
import { MongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/UserRoutes.js"

const app = express();

app.use(express.json())

app.use('/users', userRoute)

mongoose
    .connect(MongoDBURL)
    .then(() => {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log("listening");
        });
        
    })
    .catch(err => {
        console.log(err);
    })

