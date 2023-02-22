require('dotenv').config();
const Server = require('./models/server');




console.log("hola mundo")

const server = new Server();

server.listen();
