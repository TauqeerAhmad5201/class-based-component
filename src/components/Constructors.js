import React, { Component } from "react";


export default class Constructors extends Component {
  constructor(name, roll, props) {
    super(props);
    this.name = name;
    this.roll = roll;
  }
 
  render() {
    return (
      <>
        <p>Hello!</p>
      </>
    );
  }
}
let obj1 = new Constructors("Tauqeer", 233);
console.log(obj1.name);
