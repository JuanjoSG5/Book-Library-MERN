import express from "express";
import { MongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import UserEntity from "./models/UserModel.js"
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send("FUCK")
})

app.post('/newUser', async (request, response) => {
    try{
        if (
            !request.body.username ||
            !request.body.password ||
            !request.body.email
        ){
            return response.status(400).send({
                message: "User Added successfully"
            })
        }
        const newUser = {
            username: request.body.username,
            password: request.body.password,
            email: request.body.email
        }
        const user = await UserEntity.create(newUser)
        return response.status(201).send(user)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})

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

