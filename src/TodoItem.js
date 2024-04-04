import "./styles/TodoItem.css";

export function TodoItem({ texto, completed }) {
  return (
    <>
      <li className="Todoitem">
        <span
          className={`Icon Icon-check ${completed && "Icon-check--active"} `}
        >
          V
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"} `}>
          {texto}
        </p>
        <span className={`Icon Icon-delete`}>X</span>
      </li>
    </>
  );
}
