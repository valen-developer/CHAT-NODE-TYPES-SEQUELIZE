import { Server } from "http";
import * as io from "socket.io";

export class ChatSocketConnection {
  private io: SocketIO.Server;
  private users: User[] = [];

  constructor(http: Server) {
    this.io = io.listen(http);
    this.listen();
  }

  private listen() {
    this.io.on("connection", (socket) => {
      console.log("Alguien se ha conectado");
      // Escuchamos cuando un usuario quiere entrar a una sala
      socket.on("join", (user, callback) => {
        console.log(user);
        user.userId = socket.id;


        // Añadimos usuario a lista en controlador
        const resp = this.addUser(user);
        if (resp.error) return console.log("Existe");
        console.log(this.users);

        // Crea una sala en el socket
        socket.join(user.roomName);

        //Se le emite mensaje al usuario que ha entrado en la sala
        socket.emit("message", {
          user: "admin",
          message: `Bienvenido a ${user.roomName}`,
        });
        // Emitimos a todos los usuarios de la sala que un nuevo usuario a entrado
        socket.broadcast.to(user.roomName).emit("message", {
          user: "admin",
          message: `${user.userName} ha entrado`,
        });
      });
    });
  }

  private addUser(user: User) {
    let exist = false;

    this.users.forEach((userIn) => {
      console.log("====== añadimos ==========");
      console.log(userIn);
      if (
        userIn.roomName === user.roomName &&
        userIn.userName === user.userName
      )
        exist = true;
    });

    if (exist) {
      return { error: "Ya existe usuario" };
    } else {
      this.users.push(user);
      return { user };
    }
  }
}

interface User {
  userId?: any;
  userName: string;
  roomName: string;
}
