import "./TodoCounter.css";

export function TodoCounter({ completed, total }) {
  return (
    <>
      {completed === total ? (
        <h1 className="TodoCounter">
          Totos los <span>TODO's</span> están comopletados 🥳🎉
        </h1>
      ) : (
        <h1 className="TodoCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODO's
        </h1>
      )}
    </>
  );
}
