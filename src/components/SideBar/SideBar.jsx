import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

// eslint-disable-next-line
class SideBar extends PureComponent {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-separator" />
        <aside className="menu">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li><a href="#top" className="is-actinve">Home</a></li>
            <li><a href="#top">Coding</a></li>
          </ul>
          <p className="menu-label">
            More
          </p>
          <ul className="menu-list">
            <li><Link to="/">Other stuff</Link></li>
            <li><Link to="/about">blah stuff</Link></li>
            <li><a href="#top">Foo Bar</a></li>
          </ul>
        </aside>
      </div>

    );
  }
}

export default SideBar;
