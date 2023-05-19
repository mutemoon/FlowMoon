import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../shared/Interface";
import { Project } from "./Project";

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column()
    phone: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Project, project => project.user)
    projects: Project[];
}