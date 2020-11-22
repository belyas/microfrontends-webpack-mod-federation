import { useState, useEffect } from 'react';
import Product from '../product';
import { createProducts } from '../../utils';

const productsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(createProducts());
  }, []);

  if (!products.length) {
    return 'Loading products...';
  }

  return products.map(product => <Product product={product} key={product.id} />);
};


export default productsList;
