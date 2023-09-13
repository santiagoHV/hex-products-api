import { UserRepository } from "./user.repository";
import { UserDTO } from "./user.dto";

export class GetUserUseCase {
    constructor(private userRepository: UserRepository) {}

    execute = async(userId : string): Promise<UserDTO | null> => {
        return this.userRepository.getUser(userId)
    }
}