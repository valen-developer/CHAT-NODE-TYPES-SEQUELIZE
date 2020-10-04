import { Server } from "./server/server";
import { routes } from "./server/routes/index.routing";
import { ChatSocketConnection } from "./server/websockets/socket";


export const server = Server.init(3000);

const cors = require('cors');
server.app.use(cors());

//create chatsocket
const socket = new ChatSocketConnection(server.http);


//Body Parser
const bodyParser = require("body-parser");
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());


//Router
server.app.use(routes);


//DB connection
require("./server/database/db");

server.start(() => {
  console.log("Escuchando en el puerto " + server.port);
});
