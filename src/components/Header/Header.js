import React, { PureComponent } from 'react';
import SideBar from 'components/SideBar';

class Header extends PureComponent {
  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="#" className="navbar-item is-active">Home</a>
                <a href="#" className="navbar-item">Stuff</a>
                <a href="#" className="navbar-item">Github</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Kossel.github.io</h1>
              <h2 className="subtitle"> Coding to proof</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
