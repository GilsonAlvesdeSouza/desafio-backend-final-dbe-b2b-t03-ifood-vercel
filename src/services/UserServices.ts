import { hash } from 'bcrypt';
import { ConflictError } from '../errors/ConflictError';
import { IUser } from '../models/IUser';
import { IUserRepository } from '../repositories/user/IUserRepository';
import { UserSequelizeRepositories } from '../repositories/user/UserSequelizeRepositories';

export class UserServices {
	private userRepository: UserSequelizeRepositories;

	constructor(userRepository: IUserRepository<IUser>) {
		this.userRepository = userRepository;
	}

	async getUserById(id: number): Promise<IUser | null> {
		const hasUser = await this.userRepository.findById(id);
		return hasUser;
	}

	async createUser({ nome, email, senha }: IUser): Promise<IUser | null> {
		const exists = await this.userRepository.existsEmail(email);

		if (exists) {
			throw new ConflictError('O email informado já está em uso');
		}
		const passwordWithoutSpace = senha.replace(/\s+/g, '');

		const encryptedPassword = await hash(String(passwordWithoutSpace), 10);

		const user = await this.userRepository.create({
			nome,
			email,
			senha: encryptedPassword
		} as IUser);
		return user;
	}

	async updateUser({ id, nome, email, senha }: IUser): Promise<IUser | null> {
		const userExists = await this.userRepository.findById(id!);

		if (userExists) {
			const emailExists = await this.userRepository.existsEmail(email, id);

			if (emailExists) {
				throw new ConflictError('O email informado já está em uso');
			}

			const encryptedPassword = await hash(String(senha), 10);

			const user = await this.userRepository.update({
				id,
				nome,
				email,
				senha: encryptedPassword
			} as IUser);

			return user;
		}
		return null;
	}
}
