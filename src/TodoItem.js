export function TodoItem({ texto, completed }) {
  return (
    <>
      <li>
        <span>✔️ {completed}</span>
        <p>{texto}</p>
        <span>✖️</span>
      </li>
    </>
  );
}
