import React from 'react';
import { Link } from 'react-router-dom';

const pager = [
  { anchor: '&lt;', link: '/' },
  { anchor: '1', link: '/' },
  { anchor: '2', link: '/' },
  { anchor: '3', link: '/' },
  { anchor: '4', link: '/' },
  { anchor: '5', link: '/' },
  { anchor: '&gt;', link: '/' }
];

export class Pager extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              {pager.children.map(item => (
                <li><Link to={item.link}>{item.anchor}</Link></li>
              ))}
              <li className="active"><span>1</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
