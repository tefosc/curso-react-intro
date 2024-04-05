import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { useState } from "react";
import { defaultTodos } from "./data/DefaultTodos";

function App() {
  const [todos, setTodos] = useState(defaultTodos);
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
    setTodos(newTodos);
  };

  const deleteTodo = (texto) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
