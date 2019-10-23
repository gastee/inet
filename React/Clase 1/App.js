import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreetEveryone from "./GreetEveryone";

class App extends Component {
  constructor(){
    super();
    this.state = {
      alumnos: ["gustavo", "gaston","andres","pedro"]
    }

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>{
            //para recibir el parametro de nombreAlumno en nombre, en el constructor seteamos al state de todos el valor que nos llega por parametro props
            this.state.alumnos.map((nombreAlumno, i) =>{
              return <GreetEveryone nombre={nombreAlumno}></GreetEveryone>
            })
          }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
