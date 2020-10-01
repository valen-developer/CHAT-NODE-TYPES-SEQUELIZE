import { DataTypes, Model, Sequelize } from "sequelize";

export class MessageSentModel extends Model {}

export let defineMessageModel = (seq: Sequelize) => {
  MessageSentModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      message: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize: seq,
      modelName: "message",
    }
  );
};

export interface Message {
  message: string;
  user_send: number;
  user_receive: number;
}
