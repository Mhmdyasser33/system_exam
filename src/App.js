import React, { useState } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import Student from "./Component/StudentProfile/Student";
import Admin from "./Component/AdminProfile/Admin";

const App = () => {
  // Define the component's state using the "useState" hook
  const [idValue, setIdValue] = useState(""); // State for ID input value in Login component
  const [secretNumValue, setSecretNumValue] = useState(""); // State for secret number input value in Login component
  const [component, setComponent] = useState("Login"); // State for current component to render
  const [id, setId] = useState(""); // State for ID value to pass to Student and Admin components
  const [secretNumber, setSecretNumber] = useState(""); // State for secret number value to pass to Student and Admin components
  const [data, setData] = useState(null); // State for data (not currently used)

  // Function to handle the login event and set the state accordingly
  const handleLogin = (idValue, secretNumValue) => {
    setIdValue(idValue);
    setSecretNumValue(secretNumValue);
  };

  // Function to handle the change of component to render based on user input
  const handleType = (e, id, secretNum) => {
    setComponent(e);
    setId(id);
    setSecretNumber(secretNum);
  };
  
  // Conditional rendering based on the current component state
  let renderedComponent ; 
  if (component === "Login") {
    renderedComponent = <Login handleType={handleType} handleLogin={handleLogin} />;
  } else if (component === "Student") {
    renderedComponent = <Student id={id} secretNum={secretNumber} />;
  } else if (component === "Admin") {
    renderedComponent = (
      <Admin
        id={id}
        secretNum={secretNumber}
        idValue={idValue}
        secretNumValue={secretNumValue}
        handleLogin={handleLogin}
        handleType={handleType}
      />
    );
  }

  // Render the component
  return (
    <div className="App">
      {renderedComponent}
    </div>
  );
};

export default App;
