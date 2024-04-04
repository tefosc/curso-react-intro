import "./styles/TodoCounter.css";

export function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODO's
    </h1>
  );
}
