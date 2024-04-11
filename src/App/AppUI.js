import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
export function AppUi({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <h2>Cargando datos...</h2>}
        {error && <h2>Error al cargar los datos...</h2>}
        {!loading && searchedTodos.length === 0 && <h2>Crea tu primer todo</h2>}

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
