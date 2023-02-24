import React, { useState } from "react";
import "./App.css";
import Login from "./Component/Login/Login";
import Student from "./Component/StudentProfile/Student";
import Admin from "./Component/AdminProfile/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // Define the component's state using the "useState" hook
  const [idValue, setIdValue] = useState("");
  const [secretNumValue, setSecretNumValue] = useState("");
  const [component, setComponent] = useState("Login");
  const [id, setId] = useState("");
  const [secretNumber, setSecretNumber] = useState("");
  const [data, setData] = useState(null);

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

  return (
    /* <BrowserRouter>
      <div className="App">
        <Routes>
          {component === "Login" && (
            <Route
              exact
              path="/"
              element={
                <Login handleType={handleType} handleLogin={handleLogin} />
              }
            />
          )}
          {component === "Student" && (
            <Route
              exact
              path="/student"
              element={<Student id={id} secretNum={secretNumber} />}
            />
          )}
          {component === "Admin" && (
            <Route
              exact
              path="/admin"
              element={
                <Admin
                  id={id}
                  secretNum={secretNumber}
                  idValue={idValue}
                  secretNumValue={secretNumValue}
                  handleLogin={handleLogin}
                  handleType={handleType}
                />
              }
            />
          )}
        </Routes>
      </div>
    </BrowserRouter> */
    <div className="App">
    {component === "Login" && (
      <Login handleType={handleType} handleLogin={handleLogin} />
    )}
    {component === "Student" && (
      <Student id={id} secretNum={secretNumber} />
    )}
    {component === "Admin" && (
      <Admin
        id={id}
        secretNum={secretNumber}
        idValue={idValue}
        secretNumValue={secretNumValue}
        handleLogin={handleLogin}
      />
    )}
  </div>
  );
};

export default App;
