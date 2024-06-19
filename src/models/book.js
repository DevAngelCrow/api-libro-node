const { DataTypes } = require('sequelize');
const { Connection } = require('../config/database.js');
const  user  = require('./author.js')


const sequelize = new Connection().sequelize;

class Book {
    User = user.User;
    Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'id'
            }
        }
    },
        {
            tableName: 'Book'
        });
        constructor(){
            this.asociaciones()
        }
        asociaciones(){
            this.User.hasMany(this.Book, {
                foreignKey: 'authorId',
            });
            this.Book.belongsTo(this.User, {
                foreignKey: 'authorId'
            })
        }
    
        
   
}

module.exports = new Book();