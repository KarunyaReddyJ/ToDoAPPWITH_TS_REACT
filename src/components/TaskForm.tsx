import React, { useState } from "react";
import { TaskInterface } from "../type/Task";
import { uid } from "uid";
import { addTask } from "../store/actions";
import {  useDispatch,useSelector } from "react-redux";

import { TaskListStateInterface } from "../type/TaskListState";
function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // January is 0
    const day = today.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function TaskForm() {
  const [Task, setTask] = useState<TaskInterface>({
    taskId: uid(5),
    description: "",
    status: false,
    addDate: getTodaysDate(),
    deadline: "",
  });
  const tasks=useSelector((state:TaskListStateInterface) =>{return (state.tasks || []) } ) 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(e.target);
    setTask((task) => ({
      ...task,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
        addTask(Task)
    );
    setTask({
        taskId: uid(5),
        description: "",
        status: false,
        addDate: getTodaysDate(),
        deadline: "",
      })
      
    console.log(tasks)
  };
  return (
    <form onSubmit={handleSubmit} className="w-fit py-5 mx-auto"  >
      <input
        type="text"
        name="description"
        value={Task.description}
        onChange={handleChange}
        placeholder="Task"
        className="px-5 py-3"
      />{" "}
      <input
        type="date"
        name="deadline"
        value={Task.deadline}
        onChange={handleChange}
        className="px-5 py-3"
      />
      <button type="submit" className="bg-zinc-800  border-white border-2 text-white px-5 py-3 rounded-md">ADD</button>
    </form>
  );
}

export default TaskForm;
