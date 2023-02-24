import React, { useEffect, useState } from "react";
import "./Student.css";
import axios from "axios";

const Student = (props) => {
  // Define the component's state using the "useState" hook
  const [data, setData] = useState(null);

  // Use the "useEffect" hook to send an API request to retrieve the student data
  useEffect(() => {
    // Set a token in local storage to authorize the API request
    localStorage.setItem(
      "token",
      "$2b$10$7a1dsfubQXr1X6wWFjAtnulZlnGC.MX/Wj8Te6h4skGLDdF08OaDC"
    );
    // Retrieve the student's national ID and secret number from props
    const { id, secretNum } = props;
    // Retrieve the token from local storage to include in the API request headers
    const token = localStorage.getItem("token");
    // Send a POST request to the server to retrieve the student data
    axios
      .post(
        "http://127.0.0.1:3000/v0/student/login",
        {
          national_id: id,
          password: secretNum,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // Set the component's state with the retrieved student data
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.id, props.secretNum]);

  // Render the student data if it has been retrieved
  return (
    <div>
      <header>
        <div className="container">
          {data && (
            <React.Fragment>
              <p> الاسم : {data.arabic_name} </p>
              <p> الرقم القومي : {data.national_id} </p>
              <p> الكليه : {data.faculty} </p>
              <p> الكود الجامعي : {data.university_id} </p>
            </React.Fragment>
          ) }
        </div>
      </header>
    </div>
  );
};

export default Student;
