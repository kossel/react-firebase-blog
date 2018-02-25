import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import headerSeparator from 'assets/images/top_separator.png';
import './styles.scss';

class Header extends PureComponent { // eslint-disable-line
  render() {
    return (
      <div className="hero is-medium is-bold">
        <div className="hero-foot">
          <nav className="tabs is-centered">
            <ul className="menu-list">
              <li><Link to="/">Other stuff</Link></li>
              <li><Link to="/about">blah stuff</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header-footer">
          <img src={headerSeparator} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
