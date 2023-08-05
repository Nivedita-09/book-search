import  { useState,  useEffect, createContext } from "react";
import { useCallback } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = createContext();

const AppProvider = ( props) => {
  const [search, setSearch] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const encodedSearchQuery = encodeURIComponent(search); // Encode the search query
      const response = await fetch(`${URL}${encodedSearchQuery}`);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      console.log(data);
      const { docs } = data;
      // const  docs1  = data.docs;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 0) {
          setTitle("Your Search Result");
        } else {
          setTitle("No search result found");
        }
      } else {
        setBooks([]);
        setTitle("No Search Result Found");
      }
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setBooks([]);
      setTitle("Error: Unable to fetch data.");
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchBooks();

    // Cleanup on unmount
    // return () => {
    //   // Cancel any ongoing fetch (if supported by fetch API)
    // };
  }, [search, fetchBooks]);
  const value = {
    loading,
    books,
    setSearch,
    title,
    setTitle,
  };
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

// export const useGlobalContext = useContext(AppContext);

export { AppContext, AppProvider };
