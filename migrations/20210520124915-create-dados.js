'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      valorInvestido: {
        type: Sequelize.INTEGER
      },
      contrato: {
        type: Sequelize.INTEGER
      },
      dataInicio: {
        type: Sequelize.DATE
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      num: {
        type: Sequelize.INTEGER
      },
      dataFim: {
        type: Sequelize.DATE
      },
      bonusM: {
        type: Sequelize.INTEGER
      },
      bonusP: {
        type: Sequelize.FLOAT
      },
      bonusI: {
        type: Sequelize.FLOAT
      },
      Email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dados');
  }
};