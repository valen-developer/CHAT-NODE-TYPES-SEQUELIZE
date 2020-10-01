import { DataBase } from "./models/db_model";
import { UserModel, defineUserModel } from "./models/user_model.db";
import {
  MessageSentModel,
  defineMessageModel,
} from "./models/message_model.db";

//Init database
const db = new DataBase();
db.connection();

//Define Models
defineUserModel(db.sequelize);
defineMessageModel(db.sequelize);

//Relatioships
UserModel.hasMany(MessageSentModel, { as: "user", foreignKey: "user_send" });
UserModel.hasMany(MessageSentModel, {
  as: "user_receive",
  foreignKey: "user_receive",
});

//sync models
db.syncModels();
