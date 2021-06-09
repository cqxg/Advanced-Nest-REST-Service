import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { Role } from "./roles.model";
import { User } from "src/users/users.model";

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

  @ApiProperty({ example: '1', description: 'Unique identificator, id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '1', description: 'Unique role identificator, roleId' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ApiProperty({ example: '1', description: 'Unique user identificator, userId' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
};