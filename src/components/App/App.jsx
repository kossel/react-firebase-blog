import React from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/Home';
import About from 'components/About';
import Footer from 'components/Footer';
import 'assets/styles.scss';


function App() {
  return (
    <div className="app-container">
      <section className="section main-container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
