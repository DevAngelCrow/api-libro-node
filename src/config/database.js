const { Sequelize } = require('sequelize');
const { envs } = require('../config/envs');


class Connection{
    dialect = envs.DIALECT; storage = envs.STORAGE;

    constructor(){
       
    }
    
    sequelize = new Sequelize({
        dialect: this.dialect,
        storage: this.storage,
     });
        
    
    }
    

    
module.exports = {
    Connection
}