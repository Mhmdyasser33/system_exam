import { useState, useEffect } from "react";
import "./Admin.css";
import Login from "../Login/Login";
import axios from "axios";

const Admin = ({ id, secretNum, handleType, handleLogin }) => {
  // Define the component's state using the "useState" hook
  const [data, setData] = useState(null);
  const [showLogin , setShowLogin] = useState(false) ; 
  const [ErrorShow , setErrorShow] = useState(false) ;
  const [error, setError] = useState(null);

  // Use the "useEffect" hook to send an API request to retrieve the admin data
  useEffect(() => {
    // Send a POST request to the server to retrieve the admin data
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:3000/v0/admin/login",
          {
            national_id: id,
            password: secretNum,
          }
        );
        // Set the component's state with the retrieved admin data
        setData(response.data);
        setShowLogin(false) ; 
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [id, secretNum]);

  // If an error occurred during the API request, show an error message and the login component
  if ( error && !ErrorShow){
    setErrorShow(true) ; 
    alert("There was an error in the ID or secret number");
    setShowLogin(true) ; 
  }

  // If the "showLogin" state is true, show the login component
  if(showLogin){
    return <Login handleType = {handleType} handleLogin = {handleLogin}/>
  }

  // Render the admin data if it has been retrieved
  return (
    <div>
      <header>
        <div className="container">
          {data && (
            <>
              <p> الاسم : {data.arabic_name} </p>
              <p> الرقم القومي : {data.national_id} </p>
              <p> الكليه : {data.faculty} </p>
              <p> الرقم الجامعي : {data.admin_id} </p>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Admin;
