import React, { PureComponent } from 'react';
import { Route } from 'react-router'
import Home from 'components/Home';
import About from 'components/About';

class Routes extends PureComponent {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    );
  }
}

export default Routes;
