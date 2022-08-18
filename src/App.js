import React, { Component } from 'react';
import Display from './Component/Display';
import Key from './Component/Key';

class App extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      next: null,
      operation: null,
      total: null
    }

    this.state = this.initialState
  }

  clickHandler = (e) => {
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const oper = ['÷', 'X', '-', '+']

    if (number.includes(e.target.value)) {
      if (this.state.next == null) {
        this.setState({
          next: e.target.value
        })
      } else {
        this.setState({
          next: this.state.next + e.target.value
        })
      }
    } else if (oper.includes(e.target.value)) {
      this.setState({
        operation: e.target.value
      })
      if (this.state.total == null) {
        this.setState({
          next: null,
          total: this.state.next
        })
      }
    } else {
      switch (e.target.value) {
        case ('AC'):
          this.setState(this.initialState);
          break;
        case ('+/-'):
          if (this.state.next == null && this.state.total == null) {
            this.setState(this.initialState)
          } else if (this.state.next == null) {
            this.setState({
              total: (-1 * Number(this.state.total)).toString()
            })
          } else if (this.state.total == null) {
            this.setState({
              next: (-1 * Number(this.state.next)).toString()
            })
          }
          break;
        case ('%'):
          if (this.state.next == null && this.state.total == null) {
            this.setState(this.initialState)
          } else if (this.state.next == null) {
            this.setState({
              total: (Number(this.state.total) / 100).toString()
            })
          } else if (this.state.total == null) {
            this.setState({
              next: (Number(this.state.next) / 100).toString()
            })
          }
          break;
        case ('='):
          switch (this.state.operation) {
            case ('+'):
              this.setState({
                total: ((Number(this.state.next) + Number(this.state.total))).toString()
              })
              break;
            case ('-'):
              this.setState({
                total: ((Number(this.state.total) - Number(this.state.next))).toString()
              })
              break;
            case ('X'):
              this.setState({
                total: ((Number(this.state.next) * Number(this.state.total))).toString()
              })
              break;
            case ('÷'):
              this.setState({
                total: ((Number(this.state.total) / Number(this.state.next))).toString()
              })
              break;
          }
          this.setState({
            next: null,
            operation: null
          })
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <Display value={this.state.next == null && this.state.total == null ? 0 : this.state.next == null ? this.state.total : this.state.next}/>
        <Key clickHandler={this.clickHandler}/>
      </div>
    );
  }
}

export default App;