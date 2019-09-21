import React from 'react';
import './App.css';

import TopBar from './components/TopBar.js';
import HeaderImage from './components/HeaderImage.js';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import TextBlock from './components/TextBlock';


function App() {
  return (
    <div className="App">
      <Container className="ui container">
        <TopBar />
      </Container>
      <HeaderImage />
      <Container>
        <TextBlock />
      </Container>

    </div>
  );
}

export default App;
