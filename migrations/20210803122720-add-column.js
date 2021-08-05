module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('Events', 'user', {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'Users',
                        key: 'id',
                    },
                }, {transaction: t}),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.removeColumn('Events', 'user', {transaction: t})
            ]);
        });
    }
};
