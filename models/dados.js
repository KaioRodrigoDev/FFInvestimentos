'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dados.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    valorInvestido: DataTypes.INTEGER,
    contrato: DataTypes.INTEGER,
    dataInicio: DataTypes.DATE,
    cpf: DataTypes.BIGINT,
    dataFim: DataTypes.DATE,
    bonusM: DataTypes.INTEGER,
    bonusP: DataTypes.INTEGER,
    bonusI: DataTypes.INTEGER,
    Email: DataTypes.STRING,
    num: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Dados',
  });
  return Dados;
};