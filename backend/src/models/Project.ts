import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProject } from "../shared/Interface";
import { User } from "./User";

@Entity()
export class Project implements IProject {
    @PrimaryGeneratedColumn()
    pid: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createTime: Date;

    @Column()
    updateTime: Date;

    @ManyToOne(() => User, user => user.projects)
    user: User;
}