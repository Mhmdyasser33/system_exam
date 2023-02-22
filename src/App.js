import React, { Component } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import Student from "./Component/StudentProfile/Student";
import Admin from "./Component/AdminProfile/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
   constructor(props) {
    super(props); 
    this.state = {
      idValue : '' , 
      secretNumValue : '' , 
      component: "Login", 
      id: "",
      secretNumber: "",
      data: null,
    }
  } 
 
  // handleID and SecretNumValue function 
     handleLogin = ( idValue , secretNumValue ) => {
      this.setState({
        idValue , 
        secretNumValue , 
        id : idValue , 
        secretNumber : secretNumValue ,
      })
     }
  // function to handle the change of component to render based on user input
  handleType = (e, id, secretNum) => {
    this.setState({
      component: e,
      id: id,
      secretNumber: secretNum,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.component === "Login" && (
          <Login handleType={this.handleType} handleLogin={this.handleLogin} />
        )}
        {this.state.component === "Student" && (
          <Student id={this.state.id} secretNum={this.state.secretNumber} />
        )}
        {this.state.component === "Admin" && (
          <Admin 
          id={this.state.id} 
          secretNum={this.state.secretNumber}
          idValue={this.state.idValue}
          secretNumValue={this.state.secretNumValue}
          handleLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}
export default App;
