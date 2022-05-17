import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Services from './components/Services';
import StatsCounter from './components/StatsCounter';


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
              <Home></Home>
              <About></About>
              <Services></Services>
              <StatsCounter></StatsCounter>
              <Skills></Skills>
              <Education></Education>
              <Experience></Experience>
              <Contact></Contact>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
