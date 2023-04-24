import { Router } from 'express';
import AuthUserController from '../controllers/AuthUserController';
import { validateAuthUserRequest } from '../middlewares/validateAuthUserRequest';
import { AutUserService } from '../services/AutUserService';
import { UserSequelizeRepositories } from '../repositories/user/UserSequelizeRepositories';

const authUserController = new AuthUserController(
	new AutUserService(new UserSequelizeRepositories())
);

const router = Router();

router.post('/', validateAuthUserRequest, authUserController.auth);

export default router;
