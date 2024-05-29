// tasksReducer.ts

import { TaskListStateInterface } from "../type/TaskListState";
import { ADDTASK, DELETE_TASK,EDIT_TASK,TOGGLE } from "./actions";
import { ActionInterface } from "../type/Action";
import { TaskInterface } from "../type/Task";

const initialState: TaskListStateInterface = {
    tasks: []
};

const tasksReducer = (state: TaskListStateInterface = initialState, action: ActionInterface): TaskListStateInterface => {
    switch(action.type) {
        case ADDTASK:
            // Ensure action.payload is of type TaskInterface
            const newTask = action.payload as TaskInterface;
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case DELETE_TASK:
            // Ensure action.payload is of type string (taskId)
            const taskIdToDelete = action.payload as string;
            return {
                ...state,
                tasks: state.tasks.filter(task => task.taskId !== taskIdToDelete)
            };
        case EDIT_TASK:
            const editedTask=action.payload.editedTask as TaskInterface
            const taskId=action.payload.taskId as string
            return {
                ...state,
                tasks:state.tasks.map(task=>{
                    if(task.taskId===taskId)
                        return editedTask
                    return task
                })
            }
        case TOGGLE:
            const taskIdToToggle=action.payload as string
            return{
                ...state,
                tasks:state.tasks.map(task=>{
                    if(task.taskId===taskIdToToggle)
                        return {...task,status:!task.status}
                    return task
                })
            }
        default:
            return state;
    }
};

export default tasksReducer;
