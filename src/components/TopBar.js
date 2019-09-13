import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './TopBar.css';

export default class TopBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary className="ui top fixed menu topBarContainer">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='apartments'
          active={activeItem === 'apartments'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='extra services'
          active={activeItem === 'extraServices'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item inverted color='blue'
            className='ui basic button'
            name='Book Now'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
