import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('sour')
export class Sour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  receiveTime: string;
  @Column()
  checkTime: string;
  @Column()
  checker: string;
  @Column()
  from: string;
  @Column()
  result: string;

  @ManyToOne((type) => User, (el) => el.sours)
  user: User;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;
}
