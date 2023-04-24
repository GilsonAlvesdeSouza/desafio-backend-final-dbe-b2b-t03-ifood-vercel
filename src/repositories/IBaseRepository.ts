export default interface IBaseRepository<T> {
	findAll(...rest: any): Promise<T[]>;
	findById(...rest: any): Promise<T | null>;
	create(data: T): Promise<T | null>;
	update(data: T, ...rest: any): Promise<T | null>;
	delete(...rest: any): Promise<void>;
}
