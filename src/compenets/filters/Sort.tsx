import Select from "react-select";
import makeAnimated from "react-select/animated";


const animatedComponents = makeAnimated();
type SortOption = { value: string; label: string };

const sortNameOptions = [
  { value: "name-asc", label: "Name Z - A" },
  { value: "name-desc", label: "Name A - Z" },
];

const sortRatingOptions = [
  { value: "rating-asc", label: "Rating Low - High" },
  { value: "rating-desc", label: "Rating High - Low" },
];

type SortProps = {
  sortByName: string | null;
  sortByRating: string | null;
  onSortName: (sort: SortOption | null) => void;
  onSortRating: (sort: SortOption | null) => void;
};

const Sort = ({ sortByName, sortByRating,onSortName, onSortRating }: SortProps) => {

  return (
    <div>
      <h3>Sort by Name</h3>
      <Select<SortOption, false>
        components={animatedComponents}
        options={sortNameOptions}
        isClearable
        placeholder="Sort by name..."
        value={sortNameOptions.find(o => o.value === sortByName) ?? null}
        onChange={onSortName}
      />

      <h3>Sort by Rating</h3>
      <Select<SortOption, false>
        components={animatedComponents}
        options={sortRatingOptions}
        isClearable
        placeholder="Sort by rating..."
        value={sortRatingOptions.find(o => o.value === sortByRating) ?? null}
        onChange={onSortRating}
      />
    </div>
  );
};

export default Sort;
