import { Project } from "../models/Project";
import { User } from "../models/User";

export interface IUser {
    uid: number;
    phone: string;
    username: string;
    password: string;
    projects: Project[];
}

export interface IProject {
    pid: number;
    user: User;
    name: string;
    description: string;
    createTime: Date;
    updateTime: Date;
}