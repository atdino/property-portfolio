import React, { Component } from 'react';
import './ImageBlock.css';
import { Button } from 'semantic-ui-react';

export default class TextBlock extends Component {
    render() {
        return (
            <div className="backgroundImage">
                <div className="ui container">
                    <div className="ui grid paddingTop paddingBottom">
                        <div class="six wide column">
                            <p className="whiteText biggerFont alignJustify">Aenean rutrum ex id ex luctus dictum. Vivamus convallis turpis a arcu interdum, non dignissim lorem rhoncus. Vivamus sed arcu ante.</p>
                            <Button className="blue large inverted">See Our Apartments</Button>
                        </div>
                        <div className="ten wide column">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}