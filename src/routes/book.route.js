const { Router } = require('express');
const { BookController } = require('../controller/book.controller.js');

class BookRoutes{
    routes(){
        const router = Router();
        const BookControllerInstance = new BookController();

        router.get('/get/books', BookControllerInstance.getBooks);
        router.get('/get/book/:id', BookControllerInstance.getBookById);
        router.post('/post/book', BookControllerInstance.postBook);
        router.put('/put/book/:id', BookControllerInstance.putBook);
        router.delete('/delete/book/:id', BookControllerInstance.deleteBook);

        return router;
    }
}

module.exports = new BookRoutes().routes();