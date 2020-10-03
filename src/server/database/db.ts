import { DataBase } from "./models/db_model";
import { UserModel, defineUserModel } from "./models/user_model.db";
import {
  MessageSentModel,
  defineMessageModel,
} from "./models/message_model.db";

import { GroupModel, defineGroupModel } from "./models/group_model.db";

//Init database
const db = new DataBase();
db.connection();

//Define Models
defineUserModel(db.sequelize);
defineMessageModel(db.sequelize);
defineGroupModel(db.sequelize);

//Relatioships
UserModel.hasMany(MessageSentModel, { as: "user", foreignKey: "user_send" });

//sync models
db.syncModels();
