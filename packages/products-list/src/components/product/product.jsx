import { formatPrice } from '../../utils';

const Product = ({ product }) => (
  <article className="product">
    <div className="img-container">
        <img
            src={product.image_url}
            alt={product.title}
            className="product-img"
        />
        <button className="bag-btn" data-id={product.id}>
            <i
                className="fa fa-shopping-cart"
                aria-hidden="true"
            ></i>
            add to cart
        </button>
    </div>
    <h3>{product.title}</h3>
    <h4>{formatPrice(product.price)}</h4>
  </article>
);

export default Product;
