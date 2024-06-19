const express = require("express");
const { AuthorRoutes } = require('../routes/authors.route.js');
const   router  = require('../routes/index.js');
const { envs } = require('./envs');

class Server {
    app;
    routes;
    serverListener;
    
     start(){
        this.app = express();
        
        this.serverListener = this.app.listen(envs.PORT, () => {
            console.log(`Server running on port ${envs.PORT}`)
        });

        this.app.use(express.json());

        this.app.use(express.urlencoded({ extended: true }));
        
        this.app.use('/api', router);
        


        this.serverListener;


       
    }
}

module.exports = {
    Server
}





