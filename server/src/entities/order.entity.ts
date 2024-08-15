import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  pk: number;

  @Column("text", { array: true })
  imageUrls: string[];

  @Column()
  frameColor: string;

  @Column()
  fullAddress: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: "userFk" })
  user: User;
}
