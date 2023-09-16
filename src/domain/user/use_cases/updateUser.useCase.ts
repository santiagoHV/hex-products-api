import { UserRepository } from "../user.repository";
import { UserDTO } from "../user.dto";

export class UpdateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute = async(userData : UserDTO): Promise<UserDTO | null> => {
        return this.userRepository.updateUser(userData)
    }
}