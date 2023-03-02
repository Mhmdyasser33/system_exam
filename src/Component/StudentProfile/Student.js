import React, { useEffect, useState } from "react";
import "./Student.css";
import Login from "../Login/Login";
import axios from "axios";

const Student = ({ handleType, handleLogin, id, secretNum }) => {
  // Define the component's state using the "useState" hook
  const [data, setData] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [ErrorShow, setErrorShow] = useState(false);
  const [error, setError] = useState(null);

  // Use the "useEffect" hook to send an API request to retrieve the student data
  useEffect(() => {
    // Send a POST request to the server to retrieve the student data
    axios
      .post("http://127.0.0.1:3000/v0/student/login", {
        national_id: id,
        password: secretNum,
      })
      .then((response) => {
        // Set the component's state with the retrieved student data
        setData(response.data);
        setShowLogin(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id, secretNum]);

  // Check for errors and show login page if needed
  if (error && !ErrorShow) {
    setErrorShow(true);
    alert("There was an error in the ID or secret number");
    setShowLogin(true);
  }

  // Render the login page if showLogin state is true
  if (showLogin) {
    return <Login handleType={handleType} handleLogin={handleLogin} />;
  }

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
          )}
        </div>
      </header>
    </div>
  );
};

export default Student;
