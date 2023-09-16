import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../domain/user/use_cases/registerUser.useCase';
import { GetUserUseCase } from '../../domain/user/use_cases/getUser.useCase';
import { UpdateUserUseCase } from '../../domain/user/use_cases/updateUser.useCase';


export class UserController {
    constructor(
        private registerUserUseCase: RegisterUserUseCase,
        private getUserUseCase: GetUserUseCase, 
        private updateUserUseCase: UpdateUserUseCase
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

    updateUser = async(request: Request, response: Response) => {
        try{
            const userData = request.body;
            const user = await this.updateUserUseCase.execute(userData);

            response.status(201).json(user);
        }catch(error){
            response.status(500).json({ error: 'Error al actualizar usuario' });
        }
    }
}