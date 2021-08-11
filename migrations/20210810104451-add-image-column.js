'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Events', 'imageSrc', {
          type: Sequelize.STRING,
        }, {transaction: t}),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Events', 'imageSrc', {transaction: t})
      ]);
    });
  }
};
