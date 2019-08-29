import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const navigationLinks = [
  { addClassesLink: 'add-to-cart text-center', link: '/', iconKind: 'menu' },
  { addClassesLink: 'buy-now mx-1', link: '/', iconKind: 'cart' },
  { addClassesLink: 'heart', link: '/', iconKind: 'heart' }
];

static propTypes = {
  name: PropTypes.string,
  discount: PropTypes.string,
  price: PropTypes.string,
  oldPrice: PropTypes.string,
  image: PropTypes.string
}

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
    const {
      name, discount, price, oldPrice, image
    } = this.state;

    return (
      <div className="col-md-6 col-lg-3">
        <div className="product">
          <Link to="/" className="img-prod">
            <img className="img-fluid" src={image} alt={name} />
            <span className="status">{discount}</span>
            <div className="overlay" />
          </Link>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><Link to="/">{name}</Link></h3>
            <div className="d-flex">
              <div className="pricing">
                <p className="price">
                  <span className="mr-2 price-dc">{oldPrice}</span>
                  <span className="price-sale">{price}</span>
                </p>
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                {navigationLinks.map(navigationLink => (
                  <Link
                    to={navigationLink.link}
                    className={`d-flex justify-content-center align-items-center ${navigationLink.addClassesLink}`}
                  >
                    <span><i className={`ion-ios-${navigationLink.iconKind}`} /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
