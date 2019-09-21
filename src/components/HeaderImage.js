import React, { Component } from 'react';
import './HeaderImage.css';
export default class TopBar extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment headerImage">
        <h1 className="ui header mainName">{this.props.name}</h1>
        <p className="quote">{this.props.description}</p>
        <button className="ui left floated primary button">{this.props.button}</button>
      </div>
    )
  }
}
