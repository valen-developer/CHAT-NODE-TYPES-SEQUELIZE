import { DataTypes, Model, Sequelize } from "sequelize";
import { not } from "sequelize/types/lib/operators";

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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
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
  email: string;
  password: string;
}
