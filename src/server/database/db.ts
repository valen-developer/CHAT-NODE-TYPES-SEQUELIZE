import { DataBase } from "./models/db_model";
import { defineUserModel } from "./models/user_model.db";

//Init database
const db = new DataBase();
db.connection();

//Define Models
defineUserModel(db.sequelize);

//Relatioships

//sync models
db.syncModels();
