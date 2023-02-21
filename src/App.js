import React, { Component } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import Student from "./Component/StudentProfile/Student";
import Admin from "./Component/AdminProfile/Admin";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Nav from "./Component/Nav";

class App extends Component {
  state = {
    component: "Login", // default component to render is the Login component
    id: "",
    secretNumber: "",
    data: null,
  };

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
       /*    <div className="App">
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
    /*    <BrowserRouter>
       <Nav/>
        <Routes>
          {this.state.component === "Login" && (
            <Route path="/login" element={<Login handleType={this.handleType} />} />
          )}
          {this.state.component === "Student" && (
            <Route path="/Student" element={<Student id={this.state.id} secretNum={this.state.secretNumber} />} />
          )}
          {this.state.component === "Admin" && (
            <Route path="/Admin" element={<Admin id={this.state.id} secretNum={this.state.secretNumber} />} />
          )}
          
        </Routes>

      </BrowserRouter>  */  
      // commented out previous code that rendered different components based on state
      // changed to use React Router for rendering components based on URL path
      <BrowserRouter>
        <Nav/>
        <Routes>
          {/* Route for Login component with handleType function as a prop */}
          <Route path="/login" element={<Login handleType={this.handleType} />} />
          {/* Route for Student component with id and secretNumber as props */}
          <Route path="/student" element={<Student id={this.state.id} secretNum={this.state.secretNumber} />} />
          {/* Route for Admin component with id and secretNumber as props */}
          <Route path="/admin" element={<Admin id={this.state.id} secretNum={this.state.secretNumber} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
