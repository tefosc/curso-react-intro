import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";
import { SearchIcon } from "../Icons/SearchIcon";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <div className="ContainterSearchTodo">
      <SearchIcon />
      <input
        className="TodoSearch"
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </div>
  );
}
