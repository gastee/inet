import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Browsing from './components/browsing';
import Contentbot from './components/contentbot';
import Footer from './components/footer';

class App extends Component {
  render() {
    return(
      <div className="App">
      <Header/>
      <Content/>
      <Browsing/>
      <Contentbot/>
      <Footer/>
      </div>
    )
  }
}

export default App;
