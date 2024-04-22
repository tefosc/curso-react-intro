import ReactDOM from "react-dom";
export function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalTodo">{children}</div>,
    document.getElementById("modal")
  );
}
