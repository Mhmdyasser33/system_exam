import React , {Component} from 'react';
import './App.css';
import Login from './Component/Login/Login';
import Student from './Component/StudentProfile/Student';
import Admin from './Component/AdminProfile/Admin';
class App extends Component {
  // handleSubmit 
  handleSubmit = () =>{
    
  }
  render() {
    return (
      <div className="App">
      <Login />
      <Student/>
       <Admin />
   
      </div>
    );
  }
 
}

export default App;
