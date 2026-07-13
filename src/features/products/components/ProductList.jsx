import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import productService from "../ProductService";
import { useApp } from "../../../app/AppProvider";

const ProductList = (props) => {
  const { searchQuery } = useApp();

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", searchQuery],
    queryFn: productService.searchProducts.bind(null, {
      q: searchQuery,
      limit: 10,
      skip: 0,
    }),
  });

  return (
    <>
      {products?.products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;