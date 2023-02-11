import React, { Component, Fragment } from "react";
import "./Student.css";
import axios from "axios";

// Class-based component to display student information
class Student extends Component {
  // state to store student data
  state = {
    data: null
  };

  // Fetch student data using axios on component mount
  componentDidMount = () => {
    axios
      .get("127.0.0.1:3000/v0/student")
      .then(Response =>
        this.setState({
          data: Response.data
        })
      )
      .catch(error => console.error(error)); // Log the error in the console in case of failure
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
                <p> الاسم : {data.name} </p>
                <p> الرقم القومي : {data.nationalId} </p>
                <p> الكليه : {data.college} </p>
                <p> نوع الاداره : {data.adminType} </p>
              </Fragment>
            ) : (
              <p> Not found </p>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default Student;
