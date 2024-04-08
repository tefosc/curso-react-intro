import { TodoCounter } from "./TodoCounter/TodoCounter.js";
import { TodoSearch } from "./TodoSearch/TodoSearch.js";
import { TodoList } from "./TodoList/TodoList.js";
import { TodoItem } from "./TodoItem/TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton.js";
import { useState } from "react";
// import { defaultTodos } from "./data/DefaultTodos";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => [
    localStorage.setItem(itemName, JSON.stringify(newItem)),
    setItem(newItem),
  ];
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = useState("");
  //console.log("Ingresaste: ", searchValue);

  const searchedTodos = todos.filter((todo) =>
    todo.texto.toLocaleLowerCase().includes(searchValue)
  );

  const completedTodos = searchedTodos.filter((todo) => todo.completed).length;
  const totalTodos = searchedTodos.length;

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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.texto}
            texto={todo.texto}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.texto)}
            onDelete={() => deleteTodo(todo.texto)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
