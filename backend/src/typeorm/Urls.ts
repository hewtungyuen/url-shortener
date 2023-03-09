import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Urls {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  long_url: string;
}
