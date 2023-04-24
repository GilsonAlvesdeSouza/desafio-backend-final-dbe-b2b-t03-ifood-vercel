import { Request, Response } from 'express';
import { UserServices } from '../services/UserServices';
import { IUser } from '../models/IUser';

export class UserController {
	private userServices: UserServices;

	constructor(userServices: UserServices) {
		this.userServices = userServices;
		this.createUser = this.createUser.bind(this);
		this.findUserByID = this.findUserByID.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}

	async findUserByID(req: Request, res: Response) {
		const { id: userId } = req.user as IUser;

		const user = await this.userServices.getUserById(Number(userId));
		if (user) {
			return res.json(user);
		}
		return res.status(404).json({ mensagem: 'Usuario não encontrado' });
	}

	async createUser(req: Request, res: Response): Promise<Response> {
		const bodyUser = req.body as IUser;

		const user = await this.userServices.createUser(bodyUser);

		return res.status(201).json(user);
	}

	async updateUser(req: Request, res: Response): Promise<Response> {
		const { id: userId } = req.user as IUser;
		const { nome, email, senha } = req.body;

		const user = await this.userServices.updateUser({
			id: userId,
			nome,
			email,
			senha
		} as IUser);

		if (!user) {
			return res
				.status(400)
				.json({ mensagem: 'Não foi possível atualizar o usuário' });
		}
		return res.json(user);
	}
}
