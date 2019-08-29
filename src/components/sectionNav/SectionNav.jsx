import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { anchor: 'All', link: '/', classes: 'active' },
  { anchor: 'Vegetables', link: '/' },
  { anchor: 'Fruits', link: '/' },
  { anchor: 'Juice', link: '/' },
  { anchor: 'Dried', link: '/' }
];

export class SectionNav extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-10 mb-5 text-center">
          <ul className="product-category">
            {categories.map(categoriy => (
              <li><Link to={categoriy.link} className={categoriy.active}>{categoriy.anchor}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
