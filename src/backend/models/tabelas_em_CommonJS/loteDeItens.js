const { DataTypes } = require('sequelize');
const database = require('../db/database.js');

const loteDeItens = database.define('loteDeItens', {
  id_lote: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_estoque: {
    type: DataTypes.INTEGER,
    references: {
      model: 'estoque',
      key: 'id_estoque',
    },
    primaryKey: true,
  },
  id_item: {
    type: DataTypes.INTEGER,
    references: {
      model: 'itens',
      key: 'id_item',
    },
    primaryKey: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'lotesDeItens',
  timestamps: false,
});

module.exports = loteDeItens;