import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import deleteIcon from "../utils/delete.svg";
import editIcon from "../utils/edit.jpeg";
import saveIcon from '../utils/save.svg';
import { deleteTask, editTask, toggleTask } from "../store/actions";
import { TaskInterface } from '../type/Task';

function Tasks(task: TaskInterface) {
  const [state, setState] = useState({ ...task, update: false, hover: false });
  const dispatch = useDispatch();

  useEffect(() => {
    setState(prev => ({ ...prev, status: task.status }));
  }, [task.status]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div
      key={task.taskId}
      className="bg-yellow-100 text-black flex justify-between w-fit min-w-96 mx-auto my-2 py-4 px-4 rounded-md"
    >
      <input
        type="checkbox"
        name="status"
        checked={state.status}
        onChange={() => {
          dispatch(toggleTask(state.taskId));
        }}
      />
      {state.update ? (
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={handleInputChange}
          className="px-4 py-2 bg-yellow-100 border-transparent"
        />
      ) : (
        <p className={`${state.status ? 'line-through' : ''} px-4 py-2`}>
          {task.description}
        </p>
      )}

      <img
        src={deleteIcon}
        alt="Delete"
        onClick={() => {
          dispatch(deleteTask(task.taskId));
        }}
        className="w-5"
      />

      {state.update ? (
        <img
          src={saveIcon}
          className="h-7"
          alt="Save"
          onClick={() => {
            dispatch(editTask(state.taskId, state));
            setState(prev => ({ ...prev, update: false }));
          }}
        />
      ) : (
        <img
          src={editIcon}
          className="h-7"
          alt="Edit"
          onClick={() => {
            setState(prev => ({ ...prev, update: true }));
          }}
        />
      )}
      <p>
        {state.addDate}
      </p>
      <p>
        {state.deadline}
      </p>
    </div>
  );
}

export default Tasks;
