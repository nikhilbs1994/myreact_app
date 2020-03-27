import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {    
    return (
        <div className="header">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'}  alt="logo"  href="/dashboard"/>
        </div>
    );
  }
}

export default Header;