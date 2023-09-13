import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../domain/user/registerUser.useCase';
import { GetUserUseCase } from '../../domain/user/getUser.useCase';


export class UserController {
    constructor(
        private registerUserUseCase: RegisterUserUseCase,
        private getUserUseCase: GetUserUseCase, 
    ) {}

    registerUser = async (request: Request, response: Response) => {
        try {
            const userData = request.body;
            const user = await this.registerUserUseCase.execute(userData);
        
            response.status(201).json(user);
        } catch (error) {
            response.status(500).json({ error: 'Error en el registro de usuario' });
        }
    }
    
    getUser = async(request: Request, response: Response) => {
        try {
            const userId = request.params.id;
            const user = await this.getUserUseCase.execute(userId);
    
            if (user) {
                response.status(200).json(user);
            } else {
                response.status(404).json({ error: 'Usuario no encontrado' });
            }
        } catch (error) {
            response.status(500).json({ error: 'Error al obtener usuario' });
        }
    }

    // getAllUsers = async (req: Request, res: Response): Promise<void> => {
    //     console.log(this)
    //     const users = await this.userService.getAllUsers();
    //     res.json(users);
    // }

    // getUserById = async (req: Request, res: Response): Promise<void> => {
    //     const { id } = req.params;
    //     const user = await this.userService.getUserById(id);
    //     if (user) {
    //         res.json(user);
    //     } else {
    //         res.status(404).json({ message: 'User not found' });
    //     }
    // }

    // createUser = async (req: Request, res: Response): Promise<void> => {
    //     const { username, email } = req.body;
    //     const newUser = new User(username, email, 'id');
    //     await this.userService.createUser(newUser);
    //     console.log(newUser);
    //     res.status(201).json({ message: 'User created successfully' });
    // }

    // updateUser = async(req: Request, res: Response): Promise<void> => {
    //     const { id } = req.params;
    //     const { username, email } = req.body;
    //     const updatedUser = new User(username, email, 'id');
    //     await this.userService.updateUser(id, updatedUser);
    //     res.json({ message: 'User updated successfully' });
    // }

    // deleteUser  = async (req: Request, res: Response): Promise<void> => {
    //     const { id } = req.params;
    //     await this.userService.deleteUser(id);
    //     res.json({ message: 'User deleted successfully' });
    // }
}