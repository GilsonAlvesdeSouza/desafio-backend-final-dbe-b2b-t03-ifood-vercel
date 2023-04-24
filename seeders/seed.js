const { Category } = require("../src/models/ICategory");

async function seed(){
	await Category.bulkCreate(
		[
			{
				descricao: 'Informática'
			},
			{
				descricao: 'Celulares'
			},
			{
				descricao: 'Beleza e Perfumaria'
			},
			{
				descricao: 'Mercado'
			},
			{
				descricao: 'Livros e Papelaria'
			},
			{
				descricao: 'Brinquedos'
			},
			{
				descricao: 'Moda'
			},
			{
				descricao: 'Bebê'
			},
			{
				descricao: 'Games'
			}
		]
	);
}

module.exports = seed
		