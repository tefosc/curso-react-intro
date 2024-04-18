import { TodoProvider } from "../TodoContext/TodoContext.js";
import { AppUi } from "./AppUI.js";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
