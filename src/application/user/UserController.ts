import { Request, Response } from "express"
import UserService from "./UserService"

class UserController {
    static async register(req: Request, res: Response) {
        try {
            const { username, password } = req.body
            const newUser = await UserService.register(username, password)
            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).json({error: 'Internal Server Error'})
        }
    }
}

export default UserController