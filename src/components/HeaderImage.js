import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './HeaderImage.css';

export default class TopBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div className="ui inverted vertical masthead center aligned segment headerImage">
          <h1 className="ui header mainName">Lux Apartments</h1>
          <p className="quote">Lorem ipsum dolor sit amet, consectetur</p>
          <button className="ui left floated primary button">Book now</button>
        </div>
    )
  }
}
