import { useState, useEffect } from "react";
import axios from "axios";


export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState< string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err) {
        console.error("Error loading books:", err);
        setError("Failed to load books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [url]);

  return { data, loading, error }; 
}
