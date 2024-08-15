import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  pk: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
