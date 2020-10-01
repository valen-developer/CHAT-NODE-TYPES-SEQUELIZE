import { DataTypes, Model, Sequelize } from "sequelize";

export class UserModel extends Model {}

export let defineUserModel = (sq: Sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize: sq,
      modelName: "User",
    }
  );
};

export interface User {
  name: string;
}
