import React from 'react';

import { TopContacts } from '../topContacts';
import { Nav } from '../nav';
import { Slider } from '../slider';

export class Header extends React.Component {
  constructor() {
    super();
  }

  render() {    
    return (
      <div>
        <TopContacts />
        <Nav />
      </div>
    );
  }
}
