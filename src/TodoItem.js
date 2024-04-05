import "./styles/TodoItem.css";

export function TodoItem(props) {
  return (
    <>
      <li className="Todoitem">
        <span
          onClick={props.onComplete}
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          } `}
        >
          V
        </span>
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"} `}
        >
          {props.texto}
        </p>
        <span onClick={props.onDelete} className={`Icon Icon-delete`}>
          X
        </span>
      </li>
    </>
  );
}
