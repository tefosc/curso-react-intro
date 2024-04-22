import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext/TodoContext";
import { AddIcon } from "../Icons/AddIcon";
export function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);
  return (
    <>
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
        className="CreateTodoButton"
      >
        <AddIcon />
      </button>
    </>
  );
}
