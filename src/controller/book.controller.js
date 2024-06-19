const { Book } = require('../models/book.js');
const { User } = require('../models/author.js');

class BookController{
    constructor(){}

    getBooks = async (request, response) =>{
        const books = await Book.findAll({
            include:[
                {
                    model: User
                }
            ]
        });
        
        response.status(200).json(books)
    }

    getBookById = async (request, response) =>{
        
        const { id } = request.params;
        const book = await Book.findOne({
            where: {
                id
            },
            include: [
                {
                    model: User
                }
            ]
        });

        if(book !== null || book !== undefined){
            response.status(200).json(book);
        }else{
            response.status(404).json({ error: 'Registro no encontrado'});
        }
    }

    postBook = async (request, response)=>{
        const { title, summary, authorId } = request.body;

        if(title !== null && summary !== null  && authorId != NaN){

            
            //verificamos que el id del author si exista

            const autor = await User.findByPk(authorId);
            
            if(autor === null){
                return response.status(404).json({message: 'author not found'})
            }
            
            const book = await Book.create(request.body);

            response.status(201).json(book);
        }else{
            response.status(400).json({error: 'Verificar los campos que ha enviado'})
        }
    }

    putBook = async (request, response) => {
        const { id } = request.params;
        const { title, summary } = request.body;

        if(!isNaN(id)){
            const book = await Book.findByPk(id);

            if(book !== null){
                const updateBook = await Book.update(request.body,
                    {
                        where: {
                            id
                        }
                    }
                );
                const updatedBook = await Book.findByPk(id);
                
                response.status(200).json(updatedBook);
            }else{
                response.status(404).json({message: 'el id proporcionado no ha sido encontrado'})
            }
        }else{
            response.status(400).json({message: 'el id proporcionado no es correcto'})
        }
        


    }

    deleteBook = async (request, response) => {
        const { id } = request.params;
        if(!isNaN(id)){
            const book = await Book.findByPk(id);

            if(book !== null){
                await Book.destroy({
                    where: { id }
                });

                response.status(200).json({message: 'Registro eliminado con exito'})
            }else{
                response.status(404).json({message: 'el id proporcionado no ha sido encontrado'})
            }
        }else{
            response.status(400).json({message: 'el id proporcionado no es correcto'})
        }
    }
}

module.exports = {
    BookController
}