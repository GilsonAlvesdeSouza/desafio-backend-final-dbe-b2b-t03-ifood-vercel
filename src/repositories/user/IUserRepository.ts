import IBaseRepository from '../IBaseRepository';

export interface IUserRepository<T> extends IBaseRepository<T> {
	existsEmail(email: string): Promise<boolean>;
	findByEmail(email: string): Promise<T | null>;
}
