import express from 'express'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { UserRepository } from '../../infrastructure/persistence/mock/user.repository'

const router = express.Router()
const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

router.post('/register', (req, res) => {
    res.status(201).json({ 
        username: req.body.username,
        password: req.body.password,
    })
})

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router