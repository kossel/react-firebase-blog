import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'
import Header from 'components/Header';
import Home from 'components/Home';
import About from 'components/About';
import Footer from 'components/Footer';
import SideBar from 'components/SideBar'
import 'assets/styles.scss';


function App(){
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
            <div className="column is-one-quarter">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
