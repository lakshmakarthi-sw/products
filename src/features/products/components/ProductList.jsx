import { useInfiniteQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import productService from "../ProductService";
import { useApp } from "../../../app/AppProvider";

const ProductList = () => {
  const { searchQuery } = useApp();

  const {
    data,
    error,
    // fetchNextPage,
    // hasNextPage,
    // isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products", searchQuery],
    queryFn: productService.searchProducts.bind(null, {
      q: searchQuery,
      skip: 0,
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // Assuming your JSON response has a total property
      const currentFetchedCount = allPages.flatMap(page => page.items).length;
      return currentFetchedCount < lastPage.total ? currentFetchedCount : undefined;
    },
  });

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } 

  return (
    <>
      {data?.pages?.map((page) => (
        page.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ))}
    </>
  );
}

export default ProductList;