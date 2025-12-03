import Select from "react-select";
import makeAnimated from "react-select/animated";

import type { TagOption } from "../../types";

const animatedComponents = makeAnimated();

const selectTag: TagOption[] = [
    { value: "tech", label: "tech" },
    { value: "non-fiction", label: "non-fiction" },
    { value: "fiction", label: "fiction" },
    { value: "fantasy", label: "fantasy" },
    { value: "history", label: "history" },
    { value: "self-help", label: "self-help" },
    { value: "science", label: "science" },
];

const selecMinimumRating = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },

];

type FiltersProps = {
    filterByTag: TagOption | null;
    filterByRating: { value: number; label: number } | null;
    onTagChange: (tag: TagOption | null) => void;
     onRatingChange: (rating: { value: number; label: number } | null) => void;
};

const Filters = ({filterByTag, filterByRating, onTagChange, onRatingChange }: FiltersProps) => {

    return (
        <div>
            <h3>Filter by Tag</h3>
            <Select<TagOption, false>
                components={animatedComponents}
                options={selectTag}
                isClearable
                placeholder="Choose a tag..."
                value={ filterByTag}
                onChange={onTagChange}
            />
            <h5>Filter Rating</h5>
            <Select<{ value: number; label: number }, false>
                components={animatedComponents}
                options={selecMinimumRating}
                isClearable
                placeholder="Choose minimum rating"
                value={filterByRating}
                onChange={onRatingChange}
            />

        </div>
    );
};

export default Filters;
