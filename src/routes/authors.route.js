const { Router } = require('express');
const { AuthorController } = require('../controller/author.controller.js');

class AuthorRoutes{

    routes(){
        const router = Router();
        const authorControllerInstance = new AuthorController();

        router.get('/get/authors', authorControllerInstance.getAuthors);
        router.post('/post/author', authorControllerInstance.postAuthors);
        router.get('/get/author/:id', authorControllerInstance.getAuthorById);
        router.put('/put/author/:id', authorControllerInstance.putAuthor);
        router.delete('/delete/author/:id', authorControllerInstance.deleteAuthor);

        return router;
    }
}

module.exports = new AuthorRoutes().routes();