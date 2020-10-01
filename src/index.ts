import { Server } from "./server/server";
import { routes } from "./server/routes/index.routing";

export const server = Server.init(3000);


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
