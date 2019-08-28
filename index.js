import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/header';
import { Section } from './components/section';
import { Form } from './components/form';
import { Footer } from './components/footer';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="goto-here">
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
