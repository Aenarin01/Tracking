module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("Event", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    start: {
      allowNull: false,
      type: Sequelize.STRING
    },
    end: {
      allowNull: true,
      type: Sequelize.STRING
    },
    user: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    }
  }, {timestamps: false})

  return Event
};

