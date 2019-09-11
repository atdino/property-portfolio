import React from 'react';

import NavigationBar from './components/NavigationBar.js';
import button from './components/Button.js';
import TopBar from './components/TopBar.js'

import 'semantic-ui-css/semantic.min.css'


function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        <NavigationBar></NavigationBar>
        <p>Hello World</p>
        <button class="ui button">Click Here</button>
    </div>
  );
}

export default App;
