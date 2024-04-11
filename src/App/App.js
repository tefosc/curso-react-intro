import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStotage.js";
import { defaultTodos } from "../data/defaultTodos.js";
import { AppUi } from "./AppUI.js";

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V4", defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const searchedTodos = todos.filter((todo) =>
    todo.texto.toLocaleLowerCase().includes(searchValue)
  );

  const completedTodos = searchedTodos.filter((todo) => todo.completed).length;
  const totalTodos = searchedTodos.length;

  console.log(1);
  useEffect(() => console.log(2), [totalTodos]);
  console.log(3);

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
    <AppUi
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
    />
  );
}

export default App;
