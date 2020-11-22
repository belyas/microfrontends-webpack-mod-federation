import faker from 'faker';

export const createProducts = () => {
  const products = [];

  for (let i = 0; i < 6; i++) {
    const title = faker.commerce.productName();
    const price = faker.commerce.price();
    const image_url = faker.image.fashion();
    const id = faker.random.number();
    
    products.push({
      title,
      id,
      price,
      image_url
    });
  }

  return products;
};

export const formatPrice = (price, currency = '$') => {
  let formattedPrice = price;

  switch (currency) {
    case '$':
      formattedPrice = `${currency}${price}`;
      break;
  }

  return formattedPrice;
};
