import React from 'react';
import Section from './components/section'
import Section2 from './components/Section2'
import Section3 from './components/section3'
import Section4 from './components/section4' 
import Section5 from './components/section5'
import Header from './components/header'

import './App.css';



function App() {
 
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
         
    </div>
  );
}

export default App;
