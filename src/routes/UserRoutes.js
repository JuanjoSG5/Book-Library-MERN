import express from 'express';
import UserEntity from '../models/UserModel.js';
 
const router = express.Router();

router.get('/', async (request, response) =>{
    try {
        const users = await UserEntity.find({})
        return response.status(200).json({
            count: users.length,
            data: users
        })
    }catch (err) {
        console.log(err.message);
        response.status(500).send({ message: err.message });
    }
})

router.get('/:id', async (request, response) =>{
    try {
        const {id} = request.params
        const user = await UserEntity.findById(id)
        return response.status(200).json(user)
    }catch (err) {
        console.log(err.message);
        response.status(500).send({ message: err.message });
    }
})

// PUT method 
router.put('/:id', async (request,response) => {
    try {
        if (
            !request.body.username ||
            !request.body.password ||
            !request.body.email
        ){
            return response.status(400).send({
                message: 'Send all Fields',
            })
        }

        const { id } = request.params;
        const result = await UserEntity.findByIdAndUpdate(id, request.body)
        if (!result){
            return response.status(404).json({ message: 'User not found'})
        }
        return response.status(200).send({ message: 'User updated!'})
    } catch (error) {
        console.log(error.message);
    }
})

router.delete('/:id', async (request,response) =>{
    try {
        const {id} = request.params;
        const result = await UserEntity.findByIdAndDelete(id)
        if (!result) {
            return response.status(404).json({ message: 'User not found'})
        }
        return response.status(200).send({ message: 'User deleted successfully'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})


router.post('/', async (request, response) => {
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

export default router;