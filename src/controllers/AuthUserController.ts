import { Request, Response } from 'express';
import { AutUserService } from '../services/AutUserService';

export default class AuthUserController {
	private authUserService: AutUserService;

	constructor(authUserServices: AutUserService) {
		this.authUserService = authUserServices;
		this.auth = this.auth.bind(this);
	}

	async auth(req: Request, res: Response): Promise<Response> {
		const { email, senha } = req.body;

		const auth = await this.authUserService.auth({ email, senha });
		return res.json(auth);
	}
}
