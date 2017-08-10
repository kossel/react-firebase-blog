import React, { PureComponent } from 'react';
import {
  Link
} from 'react-router-dom';
import SideBar from 'components/SideBar';
import './styles.scss';
import avatarCircle from 'assets/images/avatar.png';
import headerSeparator from 'assets/images/top_separator.png';
import profilePic from 'assets/images/profile.png';

class Header extends PureComponent {
  render(){
    return (
        <div className="hero is-medium is-bold">
          <div className="hero-body">
            <div className="has-text-centered profile-pic-container">
              <img src={avatarCircle} alt=""/>
            </div>
          </div>
           <div className="hero-foot">
              <nav className="tabs is-centered">
                <ul className="menu-list">
                  <li><Link to="/">Other stuff</Link></li>
                  <li><Link to="/about">blah stuff</Link></li>
                  <li><a href="">Foo Bar</a></li>
                </ul>
              </nav>
          </div>
          <div className="header-footer">
            <img src={headerSeparator} alt=""/>
          </div>
        </div>
    )
  }
}

export default Header;
