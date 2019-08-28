import React from 'react';

import { CatalogItem } from '../catalogItem';

export class Catalog extends React.Component {
  constructor() {
    super();
  }

  render() {    
    return (
      <div className="row">
        <CatalogItem name="Bell Pepper" discount="30%" price="80.00" oldPrice="120.00" image="images/product-1.jpg" />
        <CatalogItem name="Bell Pepper" discount="40%" price="80.00" oldPrice="120.00" image="images/product-1.jpg" />
        <CatalogItem name="Bell Pepper" discount="50%" price="80.00" oldPrice="120.00" image="images/product-1.jpg" />
      </div>
    );
  }
}
