import { describe, expect, it, beforeAll } from '@jest/globals';
import { CategoryService } from '../../src/services/CategoryService';
import { ICategory, Category } from '../../src/models/ICategory';
import { CategorySequelizeRepositories } from '../../src/repositories/category/CategorySequelizeRepositories';
import { ConflictError } from '../../src/errors';
import { fail } from 'assert';
import seed from '../../seeders/seed';

const categoryServices = new CategoryService(
	new CategorySequelizeRepositories()
);

describe('test CategoryServices', () => {
	beforeAll(async () => {
		await Category.sync({ force: true });
		await seed();
	});
	it('should list all categories and check size', async () => {
		const listAll = await categoryServices.findAllCategory();
		expect(listAll.length).toBeGreaterThan(1);
		expect(Array.isArray(listAll)).toBe(true);
		expect(listAll).not.toBeInstanceOf(Error);
		for (let i = 0; i < listAll.length; i++) {
			expect(listAll[i]).toHaveProperty('id');
			expect(listAll[i]).toHaveProperty('descricao');
		}
		expect(listAll).toBeDefined();
	});
});
