import express from "express";

export class Server {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  //Creamos Singleton
  public static init(port: number) {
    return new Server(port);
  }

  public start(callback: any) {
    this.app.listen(this.port, callback);
  }
}
