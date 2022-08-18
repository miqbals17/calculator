import React, { Component } from 'react';
import './Display.css'

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='component-display'>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

export default Display;