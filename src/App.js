import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {
    texto: "Ir al mercado",
    completed: false,
  },
  {
    texto: "Cortar cebolla",
    completed: true,
  },
  {
    texto: "Estudiar ingles",
    completed: false,
  },
  {
    texto: "Comprar carne",
    completed: false,
  },
];

function App() {
  return (
    <>
      <TodoCounter completed={2} total={5} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo, index) => (
          <TodoItem texto={todo.texto} key={index} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
