module.exports = (sequelize, Sequelize) => {

    const User =  sequelize.define("User", {
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
            enum: ["basic", "supervisor", "admin"]
        }
        // events: {
        //     type: Sequelize.ARRAY(Sequelize.INTEGER)
        // }

    }, {timestamps: false})

    User.associate = function(models) {

    };

    return User
};
