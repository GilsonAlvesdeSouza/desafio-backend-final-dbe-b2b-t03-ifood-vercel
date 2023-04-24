import { ICategory } from '../models/ICategory';
import IBaseCategoryRepository from '../repositories/IBaseRepository';
import { CategorySequelizeRepositories } from '../repositories/category/CategorySequelizeRepositories';

export class CategoryService {
	private categoryRepository: CategorySequelizeRepositories;

	constructor(categoryRepository: IBaseCategoryRepository<ICategory>) {
		this.categoryRepository = categoryRepository;
	}

	async findAllCategory(): Promise<ICategory[]> {
		const category = await this.categoryRepository.findAll();
		return category;
	}
}
