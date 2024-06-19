require('dotenv/config');
const { get } = require('env-var');

 const envs = {
    PORT: get('PORT').required().asPortNumber(),
    STORAGE: get('STORAGE').required().asString(),
    DIALECT: get('DIALECT').required().asString()
}

module.exports = { envs }