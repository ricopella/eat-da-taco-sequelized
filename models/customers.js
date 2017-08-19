const sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    let Customer = sequelize.define("Customer", {
        customer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        // classMethods: {
        //     associate: function(models) {
        //         Customer.belongsTo(models.Taco);
        //     }
        // }
    });

    Customer.associate = function(models) {
        debugger;
        Customer.hasMany(models.tacos2s);
    }
    return Customer;

}