const updateCartItemQty = item => {
  document.querySelectorAll('.item-amount').forEach(amount => {
      if (+amount.dataset.id === item.id) {
          amount.textContent = item.qty;
      }
  });
};

const itemTotalPrice = price => qty => +parseFloat(price * qty).toFixed(2);

const calcTotalCartPrice = () => {
  let totalPrice = 0;
  cart.items.length &&
      cart.items.forEach(
          item => (totalPrice += itemTotalPrice(item.price)(item.qty))
      );
  cart.totalPrice = +parseFloat(totalPrice).toFixed(2);

  return cart.totalPrice;
};

const createNode = (type, classes, content) => {
  const elem = document.createElement(type);
  elem.classList.add(classes);
  elem.innerHTML = content;

  return elem;
};

const createCartItemContent = item => formatter => {
  return `<img src="${item.image_url}" alt="${item.title}" />
      <div>
          <h4>${item.title}</h4>
          <h5>${formatter(item.price)}</h5>
          <span class="remove-item" data-id="${item.id}">remove</span>
      </div>
      <div>
          <i class="fas fa-chevron-up" data-id="${item.id}"></i>
          <p class="item-amount" data-id="${item.id}">${item.qty}</p>
          <i class="fas fa-chevron-down" data-id="${item.id}"></i>
      </div>`;
};

const renderCartItemLayout = product => formatter => {
  const itemContent = createCartItemContent(product)(formatter);
  const itemNode = createNode('div', 'cart-item', itemContent);

  cartContent.appendChild(itemNode);
  clearCartBtn.removeAttribute('disabled');

  // attach event to remove button
  itemNode
      .querySelector('.remove-item')
      .addEventListener('click', removeItemFromCart);
  // attach event to add item's qty button
  itemNode
      .querySelector('.fa-chevron-up')
      .addEventListener('click', addItemQty);
  // attach event to remove item's qty button
  itemNode
      .querySelector('.fa-chevron-down')
      .addEventListener('click', removeItemQty);
};

const setcartData = data => {
  localStorage.setItem('cartData', JSON.stringify(data));
};

const updatCartGlobalData = () => {
  // update cart items icon
  cartItemsCount.textContent = cart.items.length;
  // re-calculcate total cart price
  cartTotalPrice.textContent = formatPrice(calcTotalCartPrice());
  // update local storage
  setcartData(cart);
};

const addItemTocart = itemId => {
  const product = avaialableProducts.filter(
      prod => prod.id === itemId
  )[0];
  const currentItemIndex = itemExists(itemId);

  if (currentItemIndex > -1) {
      const updatedCart = [...cart.items];
      updatedCart[currentItemIndex] = {
          ...updatedCart[currentItemIndex],
          qty: updatedCart[currentItemIndex].qty + 1,
      };

      cart.items = updatedCart;
      // update individual item in cart's quantity
      updateCartItemQty(updatedCart[currentItemIndex]);
  } else {
      cart.items.push(product);
      renderCartItemLayout(product)(formatPrice);
  }

  updatCartGlobalData();
};

const addToCartBtnHandler = () => {
  const bagBtns = document.querySelectorAll('.bag-btn');

  bagBtns && bagBtns.forEach(btn =>
      btn.addEventListener('click', function(_) {
          const ItemId = +btn.dataset.id;
          addItemTocart(ItemId);
      })
  );
};

console.log('Hello Cart')
