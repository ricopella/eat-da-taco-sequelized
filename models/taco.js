const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
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

    Taco.associate = (models) => {
        Taco.belongsTo(models.Customer, {
            foreignKey: {
                field: "Customer_id",
                allowNull: false
            }
        });
    }

    return Taco;
};