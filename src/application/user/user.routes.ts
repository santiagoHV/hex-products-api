import express, { Request, Response, Router } from 'express';
import { UserController } from './user.controller';

export class UserRoutes {
    private router: Router = express.Router();

    constructor(
        private userController: UserController
    ) {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/register', async (req: Request, res: Response) => {
        await this.userController.registerUser(req, res);
        });

        this.router.get('/:id', async (req: Request, res: Response) => {
        await this.userController.getUser(req, res);
        });

    }

    getRouter(): Router {
        return this.router;
    }
}