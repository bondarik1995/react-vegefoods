import React from 'react';

import { SectionNav } from '../sectionNav';
import { Catalog } from '../catalog';
import { Pager } from '../pager';

export class Section extends React.Component {
  constructor() {
    super();
  }

  render() {    
    return (
      <section className="ftco-section">
    	  <div className="container">
          <SectionNav />
          <Catalog />
          <Pager />
        </div>
      </section>
    );
  }
}
