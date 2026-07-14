import { useCallback, useEffect, useState } from "react";
import { useApp } from "../../../app/AppProvider";
import useDebounce from "../../../hooks/useDebounce";

const SearchSection = () => {
  const { handleSearch } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleSearchInputChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  useEffect(() => {
     debouncedSearchQuery && handleSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, handleSearch]);

  return (
    <section className="search-section">
        <input type="search" placeholder="Search products" name="product-search" onChange={handleSearchInputChange} />
        <button role="button">New Product</button>
    </section>
  );
}   

export default SearchSection;