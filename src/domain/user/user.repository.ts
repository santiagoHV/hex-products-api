import { UserDTO } from './user.dto'

export interface UserRepository {
    registerUser(userData : UserDTO): Promise<UserDTO>
    getUser(userId : string): Promise<UserDTO | null>
}