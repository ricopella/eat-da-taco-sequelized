module.exports = function(sequelize, DataTypes) {
    let Taco = sequelize.define("Tacos2", {
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
    });
    return Taco;
};