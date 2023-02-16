import React, { Component, Fragment } from "react";
import "./Student.css";
import axios from "axios";
// Class-based component to display student information
class Student extends Component {
  // state to store student data
  state = {
    data: null,
  };

  // Fetch student data using axios on component mount
  componentDidMount = () => {
    localStorage.setItem(
      "Token",
      "$2b$10$7a1dsfubQXr1X6wWFjAtnulZlnGC.MX/Wj8Te6h4skGLDdF08OaDC"
    );
    axios
      .get("http://127.0.0.1:3000/v0/student/login")
      .then((response) =>
        this.setState({
          data: response.data[0],
        })
      )
      .catch((error) => console.error(error)); // Log the error in the console in case of failure
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
                <p> الكليه : حاسبات ومعلومات </p>
                <p> الكود الجامعي : {data.university_id} </p>
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
