import { useThrottle } from "../../hooks/useThrottle";
import ProductList from "./components/ProductList";
import SearchSection from "./components/SearchSection";

const ProductPage = () => {

  const handleClick = useThrottle(() => {
    console.log('Button clicked! Triggering API request...');
  }, 1000);

  return (
    <main className="main">
        <SearchSection />
        <section className="product-list">
                <ProductList />
        </section>
        <section className="load-more-section">
                <button role="button" onClick={handleClick}>Load More</button>
        </section>
    </main>
  );
}   

export default ProductPage;