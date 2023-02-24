            // Import the necessary modules and libraries
            import { useState, useEffect } from "react";
            import "./Admin.css";
            import axios from "axios";

            // Define the "Admin" component
            const Admin = ({ id, secretNum, idValue, secretNumValue }) => {
              if(idValue !== id || secretNumValue !==secretNum){
                window.alert("youe ID or secretNum is incorrect") ; 
              }
            // Define the component's state using the "useState" hook
            const [data, setData] = useState(null);
            // Use the "useEffect" hook to make an API call when the component mounts
            useEffect(() => {
            const fetchData = async () => {
            try {
            const response = await axios.post(
            "http://127.0.0.1:3000/v0/admin/login",
            {
            national_id: id,
            password: secretNum,
            }
            );
            setData(response.data);
            } catch (error) {
            console.log(error);
            }
            };
            fetchData();
            }, [id, secretNum]);

            // Render the component to the screen
            return (
            <div>
            <header>
            <div className="container">
            {
            // If there's data in the component's state, display it
            data && (
            <>
            <p> الاسم : {data.arabic_name} </p>
            <p> الرقم القومي : {data.national_id} </p>
            <p> الكليه : {data.faculty} </p>
            <p> الرقم الجامعي : {data.admin_id} </p>
            </>
            )
            }
              </div>
              </header>
            </div>
            );
            };

            // Export the "Admin" component
            export default Admin;