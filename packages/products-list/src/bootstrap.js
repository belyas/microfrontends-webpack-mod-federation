import ReactDOM from 'react-dom';
import App from './App';
import { createProducts, formatPrice } from './utils';

window.avaialableProducts = [];

const productGridLayout = product => formatter => {
  return `<article class="product">
      <div class="img-container">
          <img
              src="${product.image_url}"
              alt="${product.title}"
              class="product-img"
          />
          <button class="bag-btn" data-id="${product.id}">
              <i
                  class="fa fa-shopping-cart"
                  aria-hidden="true"
              ></i>
              add to cart
          </button>
      </div>
      <h3>${product.title}</h3>
      <h4>${formatter(product.price)}</h4>
  </article>`;
};

const createProductsGrids = async (loadProductsfunc, formatter) => {
  const productsContainer = document.getElementById('products-container');
  const products = await loadProductsfunc();
  let _html = '';

  products.forEach(product => {
      avaialableProducts.push({ ...product, qty: 1 });
      _html += productGridLayout(product)(formatter);
  });

  productsContainer.innerHTML = _html;

  // attach button to click event
  // addToCartBtnHandler();
};

export const render = (nodeElement) => {
  if (!nodeElement) {
    nodeElement = document.createElement('div');
    nodeElement.id = '#products-list';
    document.body.appendChild(nodeElement);
  }

  ReactDOM.render(<App />, nodeElement);

  // Display products from json file
  createProductsGrids(createProducts, formatPrice);
};

if (process.env.NODE_ENV === 'development') {
  const localDevNode = document.querySelector('#local-products-list');

  if (localDevNode) {
    render(localDevNode);
  }
}
