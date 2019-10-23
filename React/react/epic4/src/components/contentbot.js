import React, { Component } from 'react';

class Contentbot extends Component  {
  render(){
    return(
      <div className="contentbot">
      <p className="myitinerary">Want to build your own MYtinerary?</p>
        <ul>
          <li><a href="#">Log In</a></li>
          <li><a href="#">Create Account</a></li>
        </ul>
      </div>
    );
  }
}
export default Contentbot;
