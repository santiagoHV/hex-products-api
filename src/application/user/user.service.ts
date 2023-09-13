import { User } from '../../domain/user/user.entity';
import { UserRepository } from '../../domain/user/user.repository';
import { UserDTO } from '../../domain/user/user.dto';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    registerUser = async(userData : UserDTO): Promise<UserDTO> => {
        return userData
    }

    getUser = async(userId : string): Promise<UserDTO | null> => {
        return null
    }

    // async getAllUsers(): Promise<User[]> {
    //     return this.userRepository.findAll();
    // }

    // async getUserById(id: string): Promise<User | undefined> {
    //     return this.userRepository.findById(id);
    // }

    // async createUser(user: User): Promise<void> {
    //     await this.userRepository.create(user);
    // }

    // async updateUser(id: string, updatedUser: User): Promise<void> {
    //     await this.userRepository.update(id, updatedUser);
    // }

    // async deleteUser(id: string): Promise<void> {
    //     await this.userRepository.delete(id);
    // }
}