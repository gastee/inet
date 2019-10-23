import React, { Component } from 'react';
import Circledright from '../img/circledright2.png';

class Browsing extends Component  {
  render(){
    return(
      <div className="browsing">
        <p>Start Browsing</p>
        <a href="#"><img className="circledright2" src={Circledright} alt='circledright2'></img></a>
      </div>
    );
  }
}
export default Browsing;
