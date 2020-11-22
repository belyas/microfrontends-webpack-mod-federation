window.avaialableProducts = [];

const loadProductsFromJson = async () => {
  try {
      const result = await fetch('products.json');
      const products = await result.json();

      return products;
  } catch (err) {
      console.log(err);
  }
};

const formatPrice = (price, currency = '$') => {
  let formattedPrice = price;

  switch (currency) {
      case '$':
          formattedPrice = `${currency}${price}`;
          break;
  }

  return formattedPrice;
};

const productGridLayout = product => formatter => {
  return `<article class="product">
      <div class="img-container">
          <img
              src="/public/${product.image_url}"
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

  products.items.forEach(product => {
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

  nodeElement.innerHTML = `
    <section class="products">
      <div class="section-title">
          <h2>Latest products</h2>
      </div>
      <div id="products-container" class="products-center"></div>
    </section>
  `;
  
  // Display products from json file
  createProductsGrids(loadProductsFromJson, formatPrice);
};

if (process.env.NODE_ENV === 'development') {
  const localDevNode = document.querySelector('#local-products-list');

  if (localDevNode) {
    render(localDevNode);
  }
}
