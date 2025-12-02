import { useState, } from "react";


export function useFilters<T extends object>(initFilters: T) {
    const [filters, setFilters] = useState<Partial<T>>(initFilters);

    const handleSetFilters = (key: keyof T, value: T[keyof T]) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return {
        filters,
        handleSetFilters
    };
}







/*export function useFilterData(items: Book[]) {
    const [filters, setFilters] = useState<Partial<IBooksFilters>>({});

    const handleSetFilters = (key: keyof IBooksFilters, value: string | TagOption | RatingOption | null) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const processedBooks = useMemo(() => {
        return (items ?? [])
            .filter(item => {
                if (filters.selectedTag && !item.tags.includes(filters.selectedTag.value)) return false;
                if (filters.selectedRating && item.rating < Number(filters.selectedRating)) return false;
                if (filters.searchText && !item.title.toLowerCase().includes(filters.searchText.toLowerCase())) return false;
                return true;
            })
            .sort((a, b) => {
                if (filters.sortByName === "name-asc") return a.title.localeCompare(b.title);
                if (filters.sortByName === "name-desc") return b.title.localeCompare(a.title);
                if (filters.sortByRating === "rating-asc") return a.rating - b.rating;
                if (filters.sortByRating === "rating-desc") return b.rating - a.rating;
                return 0;
            });
    }, [items, filters]);

    return {
        filters,
        handleSetFilters,
        processedBooks
    };

}






export function useFilterData<T, Y>(items: Y[]) {

// const [filters, setFilters] = useState<T>({
//     selectedTag:null,
//     selectedRating: null,
//     sortByName: null,
//     sortByRating: null,
//     searchText: ""
// })

/*const [selectedTag, setSelectedTag] = useState<TagOption | null>(null);
  const [selectedRating, setSelectedRating] = useState<{ value: number; label: number } | null>(null);
  const [sortByName, setSortByName] = useState<string | null>(null);
  const [sortByRating, setSortByRating] = useState<string | null>(null);

   const processedBooks = (items ?? [])
    .filter(item => {

      if (selectedTag && !item.tags.includes(selectedTag.value)) return false;

      if (selectedRating && item.rating < selectedRating.value) return false;


      if (filters.searchText && !item.title.toLowerCase().includes(filters.searchText.toLowerCase()))
        return false;

      return true;

    })
    .sort((a, b) => {
      // Sort by name
      if (sortByName === "name-asc") return a.title.localeCompare(b.title);
      if (sortByName === "name-desc") return b.title.localeCompare(a.title);

      // Sort by rating
      if (sortByRating === "rating-asc") return a.rating - b.rating;
      if (sortByRating === "rating-desc") return b.rating - a.rating;

      return 0;
    });*/