import React, { Component } from 'react'

export default class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mytext : 'Hi! Welcome to React.js'
      }
    }
    TextChange = () => {
       this.setState({
        mytext : 'Learning setState'
       })
    }
  render() {

    return (
      <>
          <p>{this.state.mytext}</p>
          <button onClick={this.TextChange}>Click Me</button>
      </>
    )
  }
}
