import React, {PureComponent } from 'react';
import {
  Link
} from 'react-router-dom'

class SideBar extends PureComponent {
  render() {
    return (
      <div className="menu-container">
        <aside className="menu">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li><a href="" className="is-actinve">Home</a></li>
            <li><a href="">Coding</a></li>
          </ul>
          <p className="menu-label">
            More
          </p>
          <ul className="menu-list">
            <li><Link to="/">Other stuff</Link></li>
            <li><Link to="/about">blah stuff</Link></li>
            <li><a href="">Foo Bar</a></li>
          </ul>
        </aside>
      </div>

      )
  }
}

export default SideBar;
