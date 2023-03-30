import  TaskCard  from "./TaskCard";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext"

export const TaskList = () => {
const {Task} = useContext(TaskContext);

  if (Task.length === 0) {
    return <h1>No hay tareas</h1>;
  }
  return (
    <div>
      {Task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
