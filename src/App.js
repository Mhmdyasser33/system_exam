import React, { Component } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import Student from "./Component/StudentProfile/Student";
import Admin from "./Component/AdminProfile/Admin";
import axios from "axios";

class App extends Component {
  state = {
    component: "Login",
    id: "",
    secretNumber: "",
    data : null ,
  };
  // handle type
  handleType = (e, id, secretNum) => {
    this.setState({
      component: e,
      id: id,
      secretNumber: secretNum,
    });
  }; 
  // getallStudent 
  getStudent = () =>{
    fetch("127.0.0.1:3000/v0/student")
    .then((response) => response.json())
    .catch((error) => console.log(error) )
  }
  
  render() {
    return (
      
      <div className="App">
        {this.state.component === "Login" && (
          <Login handleType={this.handleType}  />
        )}
        {this.state.component === "Student" && (
          <Student id={this.state.id} secretNum={this.state.secretNumber} />
        )}
        {this.state.component === "Admin" && (
          <Admin id={this.state.id} secretNum={this.state.secretNumber} />
        )}
      </div>
    );
  }
}

export default App;
