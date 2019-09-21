import React, { Component } from 'react';
import './HeaderImage.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment headerImage">
        <h1 className="ui header mainName">Lux Apartments</h1>
        <p className="quote">Lorem ipsum dolor sit amet, consectetur</p>
        <button className="ui left floated primary button">Book now</button>
      </div>
    )
  }
}
