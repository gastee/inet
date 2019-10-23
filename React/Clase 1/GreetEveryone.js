import React, { Component } from 'react';

class GreetEveryone extends Component  {

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
        <div>Hola {this.state.alumnoNombre}
          <input type="button" value="Está" onClick={this.clickEnAlumno}/>
      </div>
      )
    } else{
      {  return (
        <div>Chau! {this.state.alumnoNombre}
          <input type="button" value="Se fue" onClick={this.clickEnAlumno}/>
      </div>
      )
    }
  }
}
}

export default GreetEveryone;
