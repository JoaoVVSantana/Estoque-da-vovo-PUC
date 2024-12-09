module.exports = {
    up: async (queryInterface, Sequelize) => {
      // Tabela: gerente
      await queryInterface.createTable('gerente', {
        id_gerente: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      });
  
      // Tabela: estoque
      await queryInterface.createTable('estoque', {
        id_estoque: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        armazenamento_disponivel: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantidadeItens: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        quantidadeAlertas: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        id_gerente: {
          type: Sequelize.INTEGER,
          references: {
            model: 'gerente',
            key: 'id_gerente',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      });
  
      // Tabela: doadores
      await queryInterface.createTable('doadores', {
        id_doador: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        quantidadeItensDoados: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        id_estoque: {
          type: Sequelize.INTEGER,
          references: {
            model: 'estoque',
            key: 'id_estoque',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      });
  
      // Tabela: itens
      await queryInterface.createTable('itens', {
        id_item: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        validade: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        id_estoque: {
          type: Sequelize.INTEGER,
          references: {
            model: 'estoque',
            key: 'id_estoque',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        id_doador: {
          type: Sequelize.INTEGER,
          references: {
            model: 'doadores',
            key: 'id_doador',
          },
          allowNull: true,
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      });
  
      // Tabela: alertas
      await queryInterface.createTable('alertas', {
        id_alerta: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        conteudo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        motivo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_criacao: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        id_item: {
          type: Sequelize.INTEGER,
          references: {
            model: 'itens',
            key: 'id_item',
          },
          allowNull: true,
          onDelete: 'NO ACTION',
          onUpdate: 'CASCADE',
        },
        id_gerente: {
          type: Sequelize.INTEGER,
          references: {
            model: 'gerente',
            key: 'id_gerente',
          },
          defaultValue: 1,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      });
  
      // Tabela: alteracoes
      await queryInterface.createTable('alteracoes', {
        id_alteracao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_alteracao: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        tipo: {
          type: Sequelize.ENUM('entrada', 'saída'),
          allowNull: false,
        },
        id_estoque: {
          type: Sequelize.INTEGER,
          references: {
            model: 'estoque',
            key: 'id_estoque',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        id_gerente: {
          type: Sequelize.INTEGER,
          references: {
            model: 'gerente',
            key: 'id_gerente',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        id_item: {
          type: Sequelize.INTEGER,
          references: {
            model: 'itens',
            key: 'id_item',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      });
  
      // Tabela: loteDeItens
      await queryInterface.createTable('loteDeItens', {
        id_lote: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_estoque: {
          type: Sequelize.INTEGER,
          references: {
            model: 'estoque',
            key: 'id_estoque',
          },
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('loteDeItens');
      await queryInterface.dropTable('alteracoes');
      await queryInterface.dropTable('alertas');
      await queryInterface.dropTable('itens');
      await queryInterface.dropTable('doadores');
      await queryInterface.dropTable('estoque');
      await queryInterface.dropTable('gerente');
    },
  };
  