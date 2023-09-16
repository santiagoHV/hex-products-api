import { UserDTO } from '../../../domain/user/user.dto';
import { UserRepository } from '../../../domain/user/user.repository';

let users: UserDTO[] = [];

export class MockUserRepository implements UserRepository{

    registerUser = async(userData: UserDTO): Promise<UserDTO> =>{
        users.push({...userData});
        return Promise.resolve(userData);
    }

    getUser(userId: string): Promise<UserDTO | null> {
        const user = users.find((user) => user.id === userId)
        return Promise.resolve(user || null);
    }

    updateUser(userData: UserDTO): Promise<UserDTO | null> {
        const userIndex = users.findIndex((user) => user.id === userData.id)
        if (userIndex === -1) {
            return Promise.resolve(null)
        }
        users[userIndex] = userData

        return Promise.resolve(userData)
    }
}