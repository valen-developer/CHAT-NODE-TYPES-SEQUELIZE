import { Sequelize } from "sequelize";

import { DBCONFIG } from "../../../config/config";

export class DataBase {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      DBCONFIG.database,
      DBCONFIG.user,
      DBCONFIG.password,
      { host: DBCONFIG.host, dialect: "mariadb" }
    );
  }

  public async connection() {
    try {
      await this.sequelize.authenticate();
      console.log("Conexion realizada correctamente");
    } catch (error) {
      console.log(error);
      console.log("Algo ha ido mal en la conexcion de la base de datos");
    }
  }

  public async syncModels() {
    await this.sequelize.sync({ force: false });
    console.log("All model sync");
  }

  public endConnection() {
    this.sequelize.close();
  }
}
