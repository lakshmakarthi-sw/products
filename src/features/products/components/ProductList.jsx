import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import productService from "../ProductService";
import { useApp } from "../../../app/AppProvider";

const ProductList = () => {
  const { searchQuery } = useApp();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", searchQuery],
    queryFn: productService.searchProducts.bind(null, {
      q: searchQuery,
      limit: 12,
      skip: 0,
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } 

  return (
    <>
      {data?.products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;