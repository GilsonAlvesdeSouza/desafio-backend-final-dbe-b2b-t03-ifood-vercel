import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { UserServices } from '../services/UserServices';
import { UserSequelizeRepositories } from '../repositories/user/UserSequelizeRepositories';
import { validateUserRequest } from '../middlewares/validateUserRequest';
import isAuthenticated from '../middlewares/isAuthenticated';

const userController = new UserController(
	new UserServices(new UserSequelizeRepositories())
);

const router = Router();

router.post('/', validateUserRequest, userController.createUser);
router.use(isAuthenticated);
router.get('/', userController.findUserByID);
router.put('/', validateUserRequest, userController.updateUser);

export default router;
