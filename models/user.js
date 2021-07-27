module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            defaultValue: '123456',
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'basic',
            enum: ["basic", "supervisor","admin"]
        },
        accessToken: {
            type: Sequelize.STRING
        }
    },{ timestamps: false });

};

