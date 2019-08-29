import React from 'react';

import { CatalogItem } from '../catalogItem';

const catalog = [
  {
    name: 'Bell Pepper',
    discount: '30%',
    price: '80.00',
    oldPrice: '120.00',
    image: 'images/product-1.jpg'
  },
  {
    name: 'Bell Pepper',
    discount: '40%',
    price: '80.00',
    oldPrice: '120.00',
    image: 'images/product-1.jpg'
  },
  {
    name: 'Bell Pepper',
    discount: '50%',
    price: '80.00',
    oldPrice: '120.00',
    image: 'images/product-1.jpg'
  }
];

export class Catalog extends React.Component {
  render() {
    return (
      <div className="row">
        {catalog.map(item => (
          <CatalogItem
            name={item.name}
            discount={item.discount}
            price={item.price}
            oldPrice={item.oldPrice}
            image={item.image}
          />
        ))}
      </div>
    );
  }
}
