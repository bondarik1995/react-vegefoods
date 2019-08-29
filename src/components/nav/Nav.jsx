import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    anchor: 'Home',
    link: 'index.html'
  },
  {
    anchor: 'Shop',
    link: '/',
    children: [
      { anchor: 'Shop', link: 'shop.html' },
      { anchor: 'Wishlist', link: 'wishlist.html' },
      { anchor: 'Single Product', link: 'product-single.html' },
      { anchor: 'Cart', link: 'cart.html' },
      { anchor: 'Checkout', link: 'checkout.html' }
    ]
  },
  {
    anchor: 'About',
    link: 'about.html'
  },
  {
    anchor: 'Blog',
    link: 'blog.html'
  },
  {
    anchor: 'Contact',
    link: 'contact.html'
  }
];

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <Link className="navbar-brand" to="index.html">Vegefoods</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" />
              Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                {navLinks.map(navLink => (
                  <li className={`nav-item${navLink.children.length > 0 ? ' active dropdown' : ''}`>
                    <Link
                      to={navLink.link}
                      className={`nav-link${navLink.children.length > 0 ? ' dropdown-toggle' : ''}`}
                      {
                        if (navLink.children.length > 0) {
                          id="dropdown04"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        }
                      }
                    >
                      {navLink.anchor}
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      {navLink.children.map(child => (
                        <Link className="dropdown-item" to={child.link}>{child.anchor}</Link>
                      ))}
                    </div>
                  </li>
                ))}
                
                <li className="nav-item cta cta-colored">
                  <Link to="cart.html" className="nav-link">
                    <span className="icon-shopping_cart" />
                    [0]
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
