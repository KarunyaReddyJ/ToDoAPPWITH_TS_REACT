const ADDTASK:string='ADD_TASK'
const DELETE_TASK:string="DELETE_TASK"
const EDIT_TASK:string='EDIT_TASK'
const TOGGLE:string="TOGGLE"
import { TaskInterface } from "../type/Task"
import { ActionInterface } from "../type/Action"
export const addTask=(task:TaskInterface) :ActionInterface=>{
    return({
        type:ADDTASK,
        payload:task
    })
}

export const deleteTask=(taskId:string):ActionInterface=>{
    return({
        type:DELETE_TASK,
        payload:taskId
    })
}

export const editTask=(taskId:string,editedTask:TaskInterface):ActionInterface=>{
    return ({
        type:EDIT_TASK,
        payload:{taskId,editedTask}
    })
}
export const toggleTask=(taskId:string):ActionInterface=>{

    return({
        type:TOGGLE,
        payload:taskId
    })
}
export  {ADDTASK,DELETE_TASK,EDIT_TASK,TOGGLE}