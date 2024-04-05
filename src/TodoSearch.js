import "./styles/TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
}
