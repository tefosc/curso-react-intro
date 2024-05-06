import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoCounter() {
  const { completedTodos, totalTodos, loading } = useContext(TodoContext);

  return (
    <>
      {loading && (
        <h1 className="TodoCounter">
          Cargando los <span>TODO's</span> espere un momento
        </h1>
      )}
      {!loading && totalTodos === 0 && (
        <h1 className="TodoCounter">
          No tienes <span>TODO's</span> por hacer
        </h1>
      )}
      {!loading && completedTodos === totalTodos && totalTodos > 0 && (
        <h1 className="TodoCounter">
          ¡Felicidades! has completado todos tus <span>TODO's</span>
          🥳🎉
        </h1>
      )}
      {!loading && completedTodos !== totalTodos && (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODO's
        </h1>
      )}
    </>
  );
}
