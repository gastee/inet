import React, { Component } from 'react';
import Homeicon from '../img/homeIcon.png';

class Footer extends Component  {
  render(){
    return(
      <div className="footer">
    <a href="#"><img className="Homeicon" src={Homeicon} alt='Homeicon'></img></a>
    </div>
    );
  }
}
export default Footer;
