import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStotage";
import { defaultTodos } from "../data/defaultTodos.js";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V3", defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const searchedTodos = todos.filter((todo) =>
    todo.texto.toLocaleLowerCase().includes(searchValue)
  );

  const completedTodos = searchedTodos.filter((todo) => todo.completed).length;
  const totalTodos = searchedTodos.length;

  const addTodo = (texto) => {
    const newTodos = [...todos];
    newTodos.push({
      texto,
      completed: false,
    });
    saveTodos(newTodos);
  };
  const completeTodo = (texto) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (texto) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        setOpenModal,
        openModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
