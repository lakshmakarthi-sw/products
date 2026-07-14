import { useQueryClient } from "@tanstack/react-query";
import { useThrottle } from "../../hooks/useThrottle";
import ProductList from "./components/ProductList";
import SearchSection from "./components/SearchSection";

const ProductPage = () => {
  const queryClient = useQueryClient()

  const handleClick = useThrottle(() => {
    queryClient.fetchNextPage();
  }, 3000);

  return (
    <>
        <SearchSection />
        <section className="product-list">
                <ProductList />
        </section>
        <section className="load-more-section">
                <button disabled={!queryClient.hasNextPage || queryClient.isFetchingNextPage} role="button" onClick={handleClick}>
                  {queryClient.isFetchingNextPage ? 'Loading more...' : queryClient.hasNextPage ? 'Load More' : 'Nothing more to load'}
                </button>
        </section>
    </>
  );
}   

export default ProductPage;