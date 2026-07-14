import { useInfiniteQuery } from "@tanstack/react-query";
import ProductList from "./components/ProductList";
import SearchSection from "./components/SearchSection";
import { useApp } from "../../app/AppProvider";
import { useThrottle } from "../../hooks/useThrottle";
import productService from "../products/productService";

const ProductPage = () => {

  const { searchQuery } = useApp();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products", searchQuery],
    queryFn: productService.searchProducts.bind(null, {
      q: searchQuery,
      skip: 0,
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const currentFetchedCount = allPages.flatMap(page => page.items).length;
      return currentFetchedCount < lastPage.total ? currentFetchedCount : undefined;
    },
  });

  const handleClick = useThrottle(() => {
    fetchNextPage();
  }, 300);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } 

  return (
    <>
        <SearchSection />
        <section className="product-list">
            <ProductList data={data} />
        </section>
        <section className="load-more-section">
            <button disabled={!hasNextPage || isFetchingNextPage} role="button" onClick={handleClick}>
              {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
            </button>
        </section>
    </>
  );
}   

export default ProductPage;