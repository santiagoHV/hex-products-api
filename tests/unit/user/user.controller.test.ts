import { UserController } from '../../../src/application/user/user.controller';
import { UserService } from '../../../src/application/user/user.service';
import { UserRepository } from '../../../src/infrastructure/persistence/mock/user.repository';

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(() => {
        let userRepository = new UserRepository();
        userService = new UserService(userRepository); 
        userController = new UserController(userService);
    });

    it('should return a user by ID', async () => {
        const userId = '123'; 
        // const user = await userController.getUserById(userId);

        // expect(user).toBeDefined();
    })
})

