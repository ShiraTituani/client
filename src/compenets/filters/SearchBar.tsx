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
                className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
};

export default SearchBar;
