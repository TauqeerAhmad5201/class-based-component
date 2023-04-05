import React, { Component } from 'react'

export default class Basic extends Component {
    state = {
        age: 22, //state
    }; 
    handleAgeChange = () => {
        this.setState({
            age: this.state.age +1 
        }); //useState
    }; 
  render() {
    return (
      <>
      <button onClick={this.handleAgeChange}>Age</button>
      <p>Your age: {this.state.age}</p>
      </>
    )
  }
}
