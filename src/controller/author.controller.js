const { Request, Response } = require("express");
const { User } = require('../models/author')


class AuthorController {
    constructor() { }

    getAuthors = async (request, response) => {
        const authors = await User.findAll();
        response.json(authors);
    }

    getAuthorById = async (request, response) => {
        try{
        const { id } = request.params;
            
        if(+id){
            const user = await User.findOne({
                where:{
                    id
                }
            });
            
            if(user !== null){
                response.json(user);
            }else{
                response.json({mensaje: 'not found'})
            }

            
        }
        
        }catch(error){
            console.log(error, 'este es un error');
        }
        
    }

    postAuthors = async (request, response) => {
        try {
            const { name, bio } = request.body;

            const user = await User.create(request.body);
            response.status(201).json(user);

        } catch (error) {
            
            response.json(error)
        }

    }

    putAuthor = (request, response) => {
        return response.json({ respuesta: 'update author' });
    }

    deleteAuthor = (request, response) => {
        return response.json({ respuesta: 'delete author' });
    }
}

module.exports = {
    AuthorController
}