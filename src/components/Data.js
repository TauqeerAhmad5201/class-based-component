import React, { Component } from 'react'

export default class Data extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: 'Content to be published'
    }
  }
  handleOnClick = () => {
    this.setState ({
      data : "Published"
    }) 
  }
  
  
  render() {
    return (
      <div>
        <p>Boom: {this.state.data}</p>
        <button onClick={this.handleOnClick}>Click Me</button>
      </div>
    )
  }
}
