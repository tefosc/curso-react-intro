import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoCounter() {
  const { completedTodos, totalTodos, loading } = useContext(TodoContext);

  return (
    <>
      {loading ? (
        <h1 className="TodoCounter">
          Totos los <span>TODO's</span> están completados 🥳🎉
        </h1>
      ) : (
        <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODO's
        </h1>
      )}
    </>
  );
}
