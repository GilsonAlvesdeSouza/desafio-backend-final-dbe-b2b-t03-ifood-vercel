import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

export class CategoryController {
	private categoryService: CategoryService;

	constructor(categoryService: CategoryService) {
		this.categoryService = categoryService;
		this.findAllCategory = this.findAllCategory.bind(this);
	}

	async findAllCategory(req: Request, res: Response): Promise<Response> {
		const category = await this.categoryService.findAllCategory();
		return res.status(200).json(category);
	}
}
