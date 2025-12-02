type  searchBarProps = {
  value: string;
  onChange: (e: string) => void;
}

const SearchBar = ({ value, onChange }: searchBarProps) => {
  return (
    <label>
      Search:
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

export default SearchBar;
