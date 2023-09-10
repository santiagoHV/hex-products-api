import { User } from '../../../domain/user/user.entity';

let users: User[] = [];

export class UserRepository {
    async findAll(): Promise<User[]> {
        return users;
    }

    async findById(id: string): Promise<User | undefined> {
        return users.find((user) => user.id === id);
    }

    async create(user: User): Promise<void> {
        users.push(user);
    }

    async update(id: string, updatedUser: User): Promise<void> {
        const index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
            users[index] = updatedUser;
        }
    }

    async delete(id: string): Promise<void> {
        users = users.filter((user) => user.id !== id);
    }
}