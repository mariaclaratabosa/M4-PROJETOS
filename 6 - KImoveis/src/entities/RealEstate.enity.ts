import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./Schedule.entity";
import { Address } from "./Address.enity";
import { Category } from "./Category.enity";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "boolean", default: false })
  sold: boolean | null;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string | null;

  @Column({type: "integer"})
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Array<Schedule>;

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;

  @OneToOne(() => Address, (a) => a.realEstate)
  @JoinColumn()
  address: Address
}
