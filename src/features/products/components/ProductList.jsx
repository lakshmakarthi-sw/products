import ProductCard from "./ProductCard";

const ProductList = (props) => {
  
  return (
    <>
      {props.data?.pages?.map((page) => (
        page.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ))}
    </>
  );
}

export default ProductList;