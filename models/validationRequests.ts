import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "validation_requests",
})
export class ValidationRequests extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  commerce_code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;
}