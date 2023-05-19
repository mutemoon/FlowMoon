/* eslint-disable */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    uid: number;
    @Column()
    phone: string;
    @Column()
    username: string;
    @Column()
    password: string;
}