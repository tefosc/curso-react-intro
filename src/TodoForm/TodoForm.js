import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";
export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Ingrese nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para el almuerzo"
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button--cancell"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}
