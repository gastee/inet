import React, { Component } from 'react';
import Mytinerarylogo from '../img/Mytinerarylogo.png';

class Header extends Component  {
  render(){
    return(
      <div className="App-header">
        <img src={Mytinerarylogo} alt='Mytinerarylogo'/>
      </div>
    );
  }
}
export default Header;
