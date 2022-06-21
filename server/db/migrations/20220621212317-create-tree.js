'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tree: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      locations: {
        type: Sequelize.STRING,
        // validate: {
        //   min: 0
        // }
      },
      heightFt: {
        type: Sequelize.FLOAT,
        // validate: {
        //   min: 0
        // }
      },
      groundCircumferenceFt: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trees');
  }
};