import { User } from '../../domain/user/user.entity';
import { UserRepository } from '../../infrastructure/persistence/mock/user.repository';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findById(id);
    }

    async createUser(user: User): Promise<void> {
        await this.userRepository.create(user);
    }

    async updateUser(id: string, updatedUser: User): Promise<void> {
        await this.userRepository.update(id, updatedUser);
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}