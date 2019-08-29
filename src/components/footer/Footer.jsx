import React from 'react';
import { Link } from 'react-router-dom';

import { Copyright } from '../copyright';

const menuLinks = [
  { anchor: 'Shop', link: '/' },
  { anchor: 'About', link: '/' },
  { anchor: 'Journal', link: '/' },
  { anchor: 'Contact Us', link: '/' }
];

const helpLinksBig = [
  { anchor: 'Shipping Information', link: '/' },
  { anchor: 'Returns &amp; Exchange', link: '/' },
  { anchor: 'Terms &amp; Conditions', link: '/' },
  { anchor: 'Privacy Policy', link: '/' }
];

const helpLinksShort = [
  { anchor: 'FAQs', link: '/' },
  { anchor: 'Contact', link: '/' }
];

const socialNetworks = [
  { link: '/', icon: 'map-marker' },
  { link: '/', icon: 'phone' },
  { link: '/', icon: 'envelope' }
];

const contacts = [
  {
    anchor: '203 Fake St. Mountain View, San Francisco, California, USA',
    link: '/',
    icon: 'map-marker'
  },
  {
    anchor: '+2 392 3929 210',
    link: '/',
    icon: 'phone'
  },
  {
    anchor: 'info@yourdomain.com',
    link: '/',
    icon: 'envelope'
  }
];

export class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <Link to="/" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-up" /></div>
              </Link>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Vegefoods</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  {socialNetworks.map(socialNetwork => (
                    <li className="ftco-animate"><Link to={socialNetwork.link}><span className={`icon-${socialNetwork.icon}`} /></Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  {menuLinks.map(menuLink => (
                    <li><Link to={menuLink.link} className="py-2 d-block">{menuLink.anchor}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    {helpLinksBig.map(helpLink => (
                      <li><Link to={helpLink.link} className="py-2 d-block">{helpLink.anchor}</Link></li>
                    ))}
                  </ul>
                  <ul className="list-unstyled">
                    {helpLinksShort.map(helpLink => (
                      <li><Link to={helpLink.link} className="py-2 d-block">{helpLink.anchor}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    {contacts.map(contact => (
                      <li>
                        <Link to={contact.link}>
                          <span className={`icon icon-${contact.icon}`}><span className="text">{contact.anchor}</span></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <Copyright text="All rights reserved | This template is made with" />
        </div>
      </footer>
    );
  }
}
