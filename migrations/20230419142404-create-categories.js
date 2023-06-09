'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('categorias', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			descricao: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('categorias');
	}
};
