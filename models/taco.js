const sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    let Taco = sequelize.define("tacos2s", {
        tacoName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Taco;
};