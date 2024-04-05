import "./styles/CreateTodoButton.css";
export function CreateTodoButton() {
  return (
    <>
      <button
        onClick={() => {
          console.log("Le diste click");
        }}
        className="CreateTodoButton"
      >
        +
      </button>
    </>
  );
}
