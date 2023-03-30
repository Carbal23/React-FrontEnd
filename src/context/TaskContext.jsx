import { createContext, useState, useEffect } from "react";
import { task } from "../data/task";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [Task, setTask] = useState([]);

  const createTask = (newTask) => {
    setTask([
      ...Task,
      {
        title: newTask.Title,
        id: Task.length,
        descripcion: newTask.descripcion,
      },
    ]);
  };

  const deleteTask = (TaskId) => {
    setTask(Task.filter((task) => task.id !== TaskId));
  };

  useEffect(() => {
    setTask(task);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        Task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
