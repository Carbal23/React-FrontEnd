import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task}) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
