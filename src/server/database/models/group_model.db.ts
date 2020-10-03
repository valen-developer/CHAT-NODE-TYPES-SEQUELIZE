import { DataTypes, Model, Sequelize } from "sequelize";

export class GroupModel extends Model {}

export let defineGroupModel = (seq: Sequelize) => {
  GroupModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      people: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize: seq,
      modelName: "group",
    }
  );
};

export interface Group {
  name: string;
  people?: number;
  ownerID: number;
}
