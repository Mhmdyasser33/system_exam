// Import necessary modules and stylesheets
import React, { Component, Fragment } from "react";
import "./Student.css";
import axios from "axios";

// Class-based component to display student information
class Student extends Component {
  // state to store student data
  state = {
    id: "",
    secretNumber: "",
    data: null,
  };

  // Set the token in local storage on component mount
  componentDidMount() {
    // Set the token as a string in the local storage of the browser
    // for use it in any Api Resquest later 
    localStorage.setItem(
      "Std_Token",
      "$2b$10$7a1dsfubQXr1X6wWFjAtnulZlnGC.MX/Wj8Te6h4skGLDdF08OaDC"
    );
  }

  // Handle form submit and fetch student data using axios
  handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Destructure the state for easier access to the student's ID and secret number
    const { id, secretNumber } = this.state;
    // Get the token from local storage
    const Token = localStorage.getItem("Token");
    try {
      // Make a POST request to the API with the student's ID and secret number
      // in the request body
      const response = await axios.post(
        "http://127.0.0.1:3000/v0/student/login",
        {
          id: id,
          secretNumber: secretNumber,
        },
        // Include the token in the headers for authorization
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      // Update the state with the student data from the response
      this.setState({
        data: response.data,
      });
    } catch (error) {
      // Handle any errors that may occur and log them to the console
      console.log(error);
    }
  };

  // Render the student information on the page
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
