import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import * as short from 'short-uuid';

@Entity()
export class Urls {
  @PrimaryColumn()
  id: string = short.generate();

  @CreateDateColumn()
  date: Date;

  @Column()
  long_url: string;
}
