import React, { Component } from 'react';
import './Key.css'

const KeyButton = (props) => {
    return (
        <button value={props.name} onClick={props.clickHandler}>{props.name}</button>
    )
}

class Key extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='component-button-panel'>
                <div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="AC" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="+/-" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="%" /></div>
                    <div className='component-button-orange'><KeyButton clickHandler={this.props.clickHandler} name="÷" /></div>
                </div>
                <div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="7" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="8" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="9" /></div>
                    <div className='component-button-orange'><KeyButton clickHandler={this.props.clickHandler} name="X" /></div>
                </div>
                <div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="4" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="5" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="6" /></div>
                    <div className='component-button-orange'><KeyButton clickHandler={this.props.clickHandler} name="-" /></div>
                </div>
                <div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="1" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="2" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="3" /></div>
                    <div className='component-button-orange'><KeyButton clickHandler={this.props.clickHandler} name="+" /></div>
                </div>
                <div>
                    <div className='component-button-wide'><KeyButton clickHandler={this.props.clickHandler} name="0" /></div>
                    <div className='component-button'><KeyButton clickHandler={this.props.clickHandler} name="." /></div>
                    <div className='component-button-orange'><KeyButton clickHandler={this.props.clickHandler} name="=" /></div>
                </div>
            </div>
        );
    }
}

export default Key;