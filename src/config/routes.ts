import express from 'express'
import { UserRepository } from '../domain/user/user.repository'
import { MockUserRepository } from '../infrastructure/persistence/mock/mockUser.repository'
import { RegisterUserUseCase } from '../domain/user/use_cases/registerUser.useCase'
import { GetUserUseCase } from '../domain/user/use_cases/getUser.useCase'
import { UserController } from '../application/user/user.controller'
import { UserRoutes } from '../application/user/user.routes'
import { UpdateUserUseCase } from '../domain/user/use_cases/updateUser.useCase'

export const configureRouters: any = (app: express.Application) => {
    const userRepository: UserRepository = new MockUserRepository()
    const registerUserUseCase: RegisterUserUseCase = new RegisterUserUseCase(userRepository)
    const getUserUseCase: GetUserUseCase = new GetUserUseCase(userRepository)
    const updateUserUseCase: UpdateUserUseCase = new UpdateUserUseCase(userRepository)

    const userController = new UserController(registerUserUseCase, getUserUseCase, updateUserUseCase)

    const userRoutes = new UserRoutes(userController)

    app.use('/api/users', userRoutes.getRouter())
}