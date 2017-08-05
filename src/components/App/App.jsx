import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import Header from 'components/Header';
import Home from 'components/Home';
import About from 'components/About';
import Footer from 'components/Footer';
import 'assets/theme.scss';


function App(){
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
