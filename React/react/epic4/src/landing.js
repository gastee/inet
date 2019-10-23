import React, { Component } from 'react';
import header from './img/MYtineraryLogo.png';
import flecha from './img/circled-right-2.png';
import home from './img/homeIcon.png';

class Landing extends Component  {

constructor(props){
  super(props)
  return
  <p className="App-intro">Find your perfect trip, designed by insiders who know and love their cities.</p>
}
}
export default Landing;


class GreetingEverybody extends Component  {

  constructor(props){

    super(props);

    this.state = {

      alumnoNombre:this.props.nombre,

      show:true

    }

  }

  clickEnAlumno = ()=>{

    this.setState({"show":!this.state.show});

  }

  render (){

    if(this.state.show){  return (

        <div>

        Hola {this.state.alumnoNombre}

        <input type="button" onClick={this.clickEnAlumno}/>

        {JSON.stringify(this.state.show)}

      </div>

      )

    } else{

      {  return (

        <div>

     Chau! {this.state.alumnoNombre}

        <input type="button" onClick={this.clickEnAlumno}/>

        {JSON.stringify(this.state.show)}

      </div>

      )

    }

    }

  }

}

​
