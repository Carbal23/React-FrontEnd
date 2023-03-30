import { useState, useContext } from "react";
import {TaskContext} from "../context/TaskContext"

export const TaskForm = () => {
  const [Title, setTask] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      Title,
      descripcion,
    });
    setTask("");
    setDescripcion("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe la tarea"
        onChange={(e) => setTask(e.target.value)}
        value={Title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea¨"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
};
