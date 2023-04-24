import fs from 'fs/promises';
import path from 'path';

export const getPathPackageJson = async (): Promise<string> => {
	const caminho = path.resolve(__dirname, '../../package.json');
	try {
		await fs.readFile(caminho, 'utf8');
		return '../package.json';
	} catch (error) {
		return '../../package.json';
	}
};
