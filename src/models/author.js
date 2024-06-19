const { Sequelize, DataTypes } = require('sequelize');
const { Connection } = require('../config/database.js');


const sequelize = new Connection().sequelize;

class User {
    
    User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            bio:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            tableName: 'User',
        }
    );

    
}

module.exports = new User();