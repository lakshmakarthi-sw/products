import { useCallback } from "react";
import { useApp } from "../../../app/AppProvider";
import ProductCard from "./ProductCard";

const SearchSection = () => {
  const { handleSearch } = useApp();

  const handleSearchInputChange = useCallback((event) => {
    const query = event.target.value;
    handleSearch(query);
  }, []);

  return (
    <section className="search-section">
        <input type="search" placeholder="Search products" name="product-search" onChange={handleSearchInputChange} />
        <button role="button">New Product</button>
    </section>
  );
}   

export default SearchSection;