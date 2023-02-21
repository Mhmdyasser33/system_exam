// Import necessary modules and libraries
import React, { Component, Fragment } from "react";
import "./Admin.css";
import axios from "axios";

// Define a React component called "Admin"
class Admin extends Component {
  // Set the initial state with empty values for "id", "secretNumber", and "data"
  state = {
    id: "",
    secretNumber: "",
    data: null,
  };

  // Handle the form submission when the user clicks the "submit" button
  handleSubmit = async (e) => {
    e.preventDefault();
    // Destructure the "id" and "secretNumber" values from the component's state
    const { id, secretNumber } = this.state;
    try {
      // Send a POST request to the API endpoint with the user's "id" and "secretNumber" values
      const response = await axios.post(
        "http://127.0.0.1:3000/v0/admin/login",
        {
          id: id,
          secretNumber: secretNumber,
        }
      );
      // If the request is successful, update the component's state with the data returned from the API
      this.setState({
        data: response.data,
      });
    } catch (error) {
      // If there's an error, log it to the console
      console.log(error);
    }
  };

  // Render the component to the screen
  render() {
    // Destructure the "data" value from the component's state
    const { data } = this.state;
    return (
      <div>
        <header>
          <div className="container">
            {
              // If there's data in the component's state, display it
              data ? (
                <Fragment>
                  <p> الاسم : {data.arabic_name} </p>
                  <p> الرقم القومي : {data.national_id} </p>
                  <p> الكليه : {data.faculty} </p>
                  <p> الرقم الجامعي : {data.admin_id} </p>
                </Fragment>
              ) : (
                // If there's no data in the component's state, display a message
                <p> Not found </p>
              )
            }
          </div>
        </header>
      </div>
    );
  }
}

// Export the "Admin" component
export default Admin;
