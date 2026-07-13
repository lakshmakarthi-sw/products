import { useEffect } from "react";
import ProductList from "./components/ProductList";
import SearchSection from "./components/SearchSection";

const ProductPage = () => {

  return (
    <main className="main">
        <SearchSection />
        <section className="product-list">
                <ProductList />
        </section>
    </main>
  );
}   

export default ProductPage;