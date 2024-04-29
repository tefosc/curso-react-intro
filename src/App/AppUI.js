import { TodoCounter } from "../TodoCounter/TodoCounter.js";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { TodosLoading } from "../TodosLoading/TodosLoading.js";
import { TodosError } from "../TodosError/TodosError.js";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
import { TodoContext } from "../TodoContext/TodoContext.js";
import { useContext } from "react";
import { Modal } from "../TodoModal/Modal.js";
import { TodoForm } from "../TodoForm/TodoForm.js";

export function AppUi() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {!loading &&
          searchedTodos.map((todo) => (
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

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}
