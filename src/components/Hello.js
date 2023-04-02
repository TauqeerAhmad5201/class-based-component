import React from "react";

import { Component } from 'react'

export default class Hello extends Component {
    data = { first: 'ankur', second : 'wadia'}
    c = "John" 
    render() {
    
    return (
      <div>
        <h1>{this.c}</h1>
        <h1>{this.data.first}</h1>
        Hello World!
      </div>
    )
  }
}

