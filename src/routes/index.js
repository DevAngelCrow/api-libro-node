const { Router } = require('express');
const authorsRoute = require('./authors.route.js');
const bookRoute = require('./book.route.js');

class Rutas{
    constructor(){
        this.routes();
    }
    authorsRoute = authorsRoute;
    bookRoute = bookRoute
    router = Router();
    
    

    routes(){
        this.router.use('/author', this.authorsRoute);
        this.router.use('/book', this.bookRoute);
    }
}

module.exports = new Rutas().router;