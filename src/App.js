import React, { Component } from 'react'

export default class App extends Component {
  state={
  user2:"password"
  }
 
   
 submitAction=()=>{
  alert()
 }
 consoleAction=()=>{
  console.log("this is about class component")
 }
 handleChange=(a)=>{
  //console.log(a.target.length)
  //this.setState({
  //user1:a.target.value
  
  }
  passwordChange=(b)=>{
    this.setState({
      user2:b.target.value
  })
  
 }
 
  render() {
    return (
      <div>
        <input onChange={this.passwordChange}
        placeholder="Enter Your Password"/>
        {this.state.user2}
        {this.state.user1}
        <p><button onClick={this.submitAction}>SUBMIT</button></p>
        <button onClick={this.consoleAction}>RESET</button>
       <p><input onChange={this.handleChange}
       placeholder="Enter Your Name"/></p>
      </div>
    )
  }
}
