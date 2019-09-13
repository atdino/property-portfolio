import React from 'react';
import './App.css'; 

import button from './components/Button.js';
import TopBar from './components/TopBar.js';
import HeaderImage from './components/HeaderImage.js';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Container className="ui container">
        <TopBar></TopBar>
      </Container>
        <HeaderImage></HeaderImage>
      <Container>
        <div class="ui grid">
          <div class="ten wide column">
            <h1 className="ui center">naslov</h1>
            <p>Paragraf</p>
          </div>
          <div class="six wide column"></div>
         </div>
      </Container>
    </div>
  );
}

export default App;
