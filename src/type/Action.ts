import { TaskInterface } from "./Task";

interface ActionInterface {
    type:string;
    payload:  TaskInterface | string | (TaskInterface & string)
}

export type {ActionInterface}