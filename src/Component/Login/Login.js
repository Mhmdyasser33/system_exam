            // Import necessary modules and libraries
            import React from "react";
            import "./Login.css"

            // Define the Login functional component
            const Login = (props) => {
            // Define a function to handle form submission
            const handleSubmit = (e) => {
            e.preventDefault(); // prevent the form from submitting
            // Get the values from the input fields
            const input1 = document.getElementById("id_input").value;
            const input2 = document.getElementById("secretNum_input").value;
            // Call the handleLogin function passed down from the parent component
            props.handleLogin(input1, input2);
            // Validate the input fields
            if (!input1 && !input2) {
            alert("ID and SecretNum fields are required!");
            } else if (!input1) {
            alert("id field is required!");
            return;
            } else if (!input2) {
            alert("secretNumber field is required!");
            return;
            }
            // Get the selected user type radio button
            const selectedUserType = document.querySelector(
              'input[name="user_type"]:checked'
            );
            // Call the handleType function based on the selected user type
            if (
              selectedUserType &&
              selectedUserType.value === "student" &&
              input1 !== "" &&
              input2 !== ""
            ) {
              props.handleType("Student", input1, input2);
            } else if (
              selectedUserType &&
              selectedUserType.value === "admin" &&
              input1 !== "" &&
              input2 !== ""
            ) {
              props.handleType("Admin", input1, input2);
            }
            };

            // Render the Login component
            return (
            <form onSubmit={handleSubmit}>
            <h3 className="login"> التسجيل </h3>
            <input
                type="password"
                className="password"
                id="id_input"
                placeholder="الرقم القومي "
              />
            <input
                type="password"
                className="password"
                id="secretNum_input"
                placeholder="الرقم السري "
              />
            <br></br>
            <button className="btn" id="btn">
            تسجيل
            </button>
            <div className="radio_btn_Container">
            <input type="radio" name="user_type" id="student" value="student" />
            <label htmlFor="student"> طالب </label>
            <input type="radio" name="user_type" id="admin" value="admin" />
            <label htmlFor="admin"> أدمن </label>
            </div>
            </form>
            );
            };

            // Export the Login component
            export default Login;