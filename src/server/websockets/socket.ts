import { Server } from "http";
import * as io from "socket.io";

export class SocketConnection {
  public io: SocketIO.Server;

  constructor(http: Server) {
    this.io = io.listen(http);
    this.listen();
  }

  private listen() {
    this.io.on("connection", (socket) => {
      // Escuchamos cuando un usuario quiere entrar a una sala
      socket.on("join", (joinData: JoinData, callback) => {

        // Añadimos usuario a lista en controlador
        socket.join(joinData.roomName);




      });
    });
  }

  public createChannel(idChannel: string) {}
}

interface JoinData {
  userName: string;
  roomName: string;
}
