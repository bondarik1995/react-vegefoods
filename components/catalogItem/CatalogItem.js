import React from 'react';

export class CatalogItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      discount: props.discount,
      price: props.price,
      oldPrice: props.oldPrice,
      image: props.image
    }
  }

  render() {
    const {name, discount, price, oldPrice, image} = this.state;

    return (
      <div className="col-md-6 col-lg-3">
        <div className="product">
          <a href="#" className="img-prod"><img className="img-fluid" src="{image}" alt="Colorlib Template" />
            <span className="status">{discount}</span>
            <div className="overlay"></div>
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">{name}</a></h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price"><span className="mr-2 price-dc">${oldPrice}</span><span className="price-sale">${price}</span></p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                  <span><i className="ion-ios-menu"></i></span>
                </a>
                <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                  <span><i className="ion-ios-cart"></i></span>
                </a>
                <a href="#" className="heart d-flex justify-content-center align-items-center ">
                  <span><i className="ion-ios-heart"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
