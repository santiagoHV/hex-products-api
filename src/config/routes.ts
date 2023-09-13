import express from 'express'
import { UserRepository } from '../domain/user/user.repository'
import { MockUserRepository } from '../infrastructure/persistence/mock/mockUser.repository'
import { RegisterUserUseCase } from '../domain/user/registerUser.useCase'
import { GetUserUseCase } from '../domain/user/getUser.useCase'
import { UserController } from '../application/user/user.controller'
import { UserRoutes } from '../application/user/user.routes'

export const configureRouters: any = (app: express.Application) => {
    const userRepository: UserRepository = new MockUserRepository()
    const registerUserUseCase: RegisterUserUseCase = new RegisterUserUseCase(userRepository)
    const getUserUseCase: GetUserUseCase = new GetUserUseCase(userRepository)

    const userController = new UserController(registerUserUseCase, getUserUseCase)

    const userRoutes = new UserRoutes(userController)

    app.use('/api/users', userRoutes.getRouter())
}