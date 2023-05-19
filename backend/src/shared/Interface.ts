import { Project } from "../models/Project";
import { User } from "../models/User";

export interface IUser {
    id: number;
    phone: string;
    username: string;
    password: string;
    projects: IProject[];
}

export interface IProject {
    id: number;
    user: IUser;
    name: string;
    description: string;
    createTime: Date;
    updateTime: Date;
}

export interface IRequestAddType {
    id: number;
    user: IUser;
    typeName: string;
    status: 'pending' | 'accepted' | 'rejected';
}

export interface IType {
    id: string;
    label: string;
}

export interface IComponentInput {
    id: number;
    component: IComponent;
    name: string;
    type: IType;
}

export interface IComponentOutput {
    id: number;
    component: IComponent;
    name: string;
    type: IType;
}

export interface IComponent {
    id: number;
    name: string;
    inputs: IComponentInput[];
    outputs: IComponentOutput[];
}