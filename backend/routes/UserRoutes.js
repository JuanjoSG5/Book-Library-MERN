import express from 'express';
import UserEntity from '../models/UserModel.js';

const router = express.Router();


// GET all users (accessible to all)
router.get('/', async (request, response) => {
    try {
        const users = await UserEntity.find({});
        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (err) {
        console.log(err.message);
        response.status(500).send({ message: err.message });
    }
});

// GET user by ID (accessible to all)
router.get('/:id',async (request, response) => {
    try {
        const { id } = request.params;
        const user = await UserEntity.findById(id);
        return response.status(200).json(user);
    } catch (err) {
        console.log(err.message);
        response.status(500).send({ message: err.message });
    }
});

// PUT method (accessible only to admins)
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.password ||
            !request.body.email
        ) {
            return response.status(400).send({
                message: 'Send all Fields',
            });
        }

        const { id } = request.params;
        const result = await UserEntity.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).send({ message: 'User updated!' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// DELETE user by ID (accessible only to admins)
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await UserEntity.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// POST new user (registration) - accessible to all
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.password ||
            !request.body.email
        ) {
            return response.status(400).send({
                message: "Send all required fields"
            });
        }

        const newUser = {
            username: request.body.username,
            password: request.body.password,
            email: request.body.email,
            admin: false // Set admin property based on your logic (e.g., default to false for new users)
        };
        const user = await UserEntity.create(newUser);
        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});



export default router;
