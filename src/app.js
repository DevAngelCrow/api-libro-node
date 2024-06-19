const { Server } = require("./config/server.js") ;
const { AuthorRoutes } = require("./routes/authors.route.js");


(async()=>{
    main();
})();

async function main(){
    const serverInstance = new Server();
    serverInstance.start();
    
    // const rutasinstancia = new AuthorRoutes();

    // rutasinstancia.routes();

}