import {
    alerta,
    alteracao,
    doador,
    estoque,
    gerente,
    historico,
    item,  
  } from './../../packages.js';
//
item.belongsTo(estoque, { foreignKey: 'id_estoque', as: 'Estoque Principal' });
item.belongsTo(doador, { foreignKey: 'id_doador', as: 'Responsavel Por Doar' });
item.hasMany(alerta, { foreignKey: 'id_item', as: 'Alertas Criados' });
//
historico.hasMany(alteracao, { foreignKey: 'id_historico', as: 'Lista de Alteracoes' }); 
historico.belongsTo(estoque, { foreignKey: 'id_estoque', as: 'Estoque Relacionado' }); 
//
gerente.hasOne(estoque, { foreignKey: 'id_gerente', as: 'Estoque Principal' });
gerente.hasMany(alteracao, { foreignKey: 'id_gerente', as: 'Alteracoes Feitas' });
gerente.hasMany(alerta,{foreignKey:"id_gerente", as:'Alertas Recebidos'});
//
estoque.hasMany(item, { foreignKey: 'id_estoque', as: 'Itens no estoque' });
estoque.hasMany(doador, { foreignKey: 'id_estoque', as: 'Doadores do lar' });
estoque.hasMany(alerta, { foreignKey: 'id_estoque', as: 'alertas' });
estoque.hasOne(historico, {foreignKey:'id_estoque', as:'Historico de Alterações'});
estoque.belongsTo(gerente, { foreignKey: 'id_gerente', as: 'Gerente' });
//
doador.hasMany(item, { foreignKey: 'id_doador', as: 'Quantidade de Itens Doados' });
//
alteracao.belongsTo(historico, { foreignKey: 'id_historico', as: 'Historico de Alteracoes' });
//
alerta.belongsTo(item, { foreignKey: 'id_item', as: 'Alertas do item' });


export {
    alerta,
    alteracao,
    doador,
    estoque,
    gerente,
    historico,
    item,
}