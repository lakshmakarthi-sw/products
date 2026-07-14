const ProductCard = (props) => {
    const { product } = props;

    return (
        <article className="product-card" tabIndex="0">
            <div className="product-img">
                <img src={product.images[0]} alt={product.title} loading="lazy" />
            </div>
            <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-price-rating">
                    <p>{`Price: ${product.price.toFixed(2)}`}</p>
                    <p>{product.rating}</p>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;