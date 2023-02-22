const express = require('express')
const cors = require('cors');

class Server {

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        // Middleweres
            
        this.middleweres();
        

        // Rutas de mi aplicacion
        this.routes();
    }

    middleweres(){
            // cors
        this.app.use( cors() );
            // lectura y parseo del body
        this.app.use( express.json() );
            // directorio "ruta" Publica
        this.app.use( express.static('public') );

    }


    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
         console.log('Servidor corriendo en el peurto:', this.port);
        })
    }

}




module.exports = Server;