import React from 'react';
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Root from 'components/App';
import { AppContainer } from 'react-hot-loader'


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Root);

if (module.hot) {
  module.hot.accept('components/Root', () => { render(Root) })
}
