import { MongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/UserRoutes.js";

// Change the following two lines
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoute);

mongoose
    .connect(MongoDBURL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("listening");
        });
    })
    .catch(err => {
        console.log(err);
    });
