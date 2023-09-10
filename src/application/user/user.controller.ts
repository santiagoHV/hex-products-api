import { Request, Response } from 'express';
import { User } from '../../domain/user/user.entity';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        console.log(this)
        const users = await this.userService.getAllUsers();
        res.json(users);
    }

    getUserById = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const user = await this.userService.getUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    createUser = async (req: Request, res: Response): Promise<void> => {
        const { username, email } = req.body;
        const newUser = new User(username, email, 'id');
        await this.userService.createUser(newUser);
        console.log(newUser);
        res.status(201).json({ message: 'User created successfully' });
    }

    updateUser = async(req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { username, email } = req.body;
        const updatedUser = new User(username, email, 'id');
        await this.userService.updateUser(id, updatedUser);
        res.json({ message: 'User updated successfully' });
    }

    deleteUser  = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.userService.deleteUser(id);
        res.json({ message: 'User deleted successfully' });
    }
}