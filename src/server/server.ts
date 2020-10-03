import express from "express";
import * as httpConnection from "http";

export class Server {
  public app: express.Application;
  public port: number;
  public http: httpConnection.Server;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.http = httpConnection.createServer(this.app);
  }

  public static init(port: number) {
    return new Server(port);
  }

  public start(callback: any) {
    this.http.listen(this.port, callback);
  }
}
