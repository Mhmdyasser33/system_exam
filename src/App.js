import React, { Component } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import Student from "./Component/StudentProfile/Student";
import Admin from "./Component/AdminProfile/Admin";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
  state = {
    component: "Login",
    id: "",
    secretNumber: "",
    data: null,
  };
  
  // handle type
  handleType = (e, id, secretNum) => {
    this.setState({
      component: e,
      id: id,
      secretNumber: secretNum,
    });
  }; 

  render() {
    return (
      <BrowserRouter>
      <Routes>
      {this.state.component === "Login" && (
         <Route path="/login" element={ <Login handleType={this.handleType}  />}/>
        )}
        {this.state.component === "Student" && (
          <Route path="/student" element={<Student id={this.state.id} secretNum={this.state.secretNumber} />}/>
        )}
        {this.state.component === "Admin" && (
        <Route path="/admin" element={<Admin id={this.state.id} secretNum={this.state.secretNumber} />}/>
        )}
      </Routes>
      
      </BrowserRouter>
       /* <div className="App">
       {this.state.component === "Login" && (
         <Login handleType={this.handleType}  />
       )}
       {this.state.component === "Student" && (
         <Student id={this.state.id} secretNum={this.state.secretNumber} />
       )}
       {this.state.component === "Admin" && (
         <Admin id={this.state.id} secretNum={this.state.secretNumber} />
       )}
     </div> */
    );
  }
}

export default App;
