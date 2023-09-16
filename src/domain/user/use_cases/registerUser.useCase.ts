import { UserRepository } from "../user.repository";
import { UserDTO } from "../user.dto";

export class RegisterUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute = async(userData : UserDTO): Promise<UserDTO> => {
        return this.userRepository.registerUser(userData)
    }
}