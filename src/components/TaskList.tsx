import { useSelector, useDispatch } from "react-redux";
import { TaskListStateInterface } from "../type/TaskListState";
import Tasks from "./Tasks";



function TaskList() {
  
  const tasks = useSelector((state: TaskListStateInterface) => {
    return state.tasks || [];
  });
 
  return (
    <div className=" px-10 py-6 w-6/12 justify-items-center">
      {tasks.length > 0 ? (
        (tasks || []).map((task) => {
          return (
            <Tasks key={task.taskId} description={task.description} addDate={task.addDate} taskId={task.taskId} deadline={task.deadline}  status={task.status}  />
          );
        })
      ) : (
        <h2>No Tasks</h2>
      )}
    </div>
  );
}

export default TaskList;
