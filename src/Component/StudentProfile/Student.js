// Import necessary modules and stylesheets
import React, { Component, Fragment } from "react";
import "./Student.css";
import axios from "axios";

// Class-based component to display student information
class Student extends Component {
  // state to store student data
  state = {
    data: null,
  };

  // Set the token in local storage on component mount
  componentDidMount = async() => {
    localStorage.setItem('token' , '$2b$10$7a1dsfubQXr1X6wWFjAtnulZlnGC.MX/Wj8Te6h4skGLDdF08OaDC')
    console.log(this.props.id);
    console.log(this.props.secretNum)
    const {id, secretNum} = this.props ; 
    const Token = localStorage.getItem('token') 
    try{
    const response = await axios.post(
      "http://127.0.0.1:3000/v0/student/login",
      {
        national_id: id,
        password: secretNum,
      }  , 
      {
        headers :{
          Authorization : `Bearer ${Token}`
        }
      }  
  );
  this.setState({
    data: response.data,
  }) ; 
    }catch(error){
      console.log(error) 
    }
  };
  render() {
    // Destructuring the state
    const { data } = this.state;
    // Return the student information if data is present in the state
    return (
      <div>
        <header>
          <div className="container">
            {data ? (
              <Fragment>
                {/* Display student information */}
                <p> الاسم : {data.arabic_name} </p>
                <p> الرقم القومي : {data.national_id} </p>
                <p> الكليه : {data.faculty} </p>
                <p> الكود الجامعي : {data.university_id} </p>
              </Fragment>
            ) : (
              // Display a message if no data is present in the state
              <p> Not found </p>
            )}
          </div>
        </header>
      </div>
    );
  }
}

// Export the Student component for use in other parts of the application
export default Student;
