// Import necessary modules and libraries
import React, { Component, Fragment } from "react";
import "./Admin.css";
import axios from "axios";
class Admin extends Component {
  state = {
    idValue: this.props.idValue,
    secretNumValue: this.props.secretNumValue,
    data: null,
  };

  componentDidMount = async (e) => {
    const { idValue, secretNumValue } = this.state;
    const { id, secretNum } = this.props;
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/v0/admin/login",
        {
          national_id: id,
          password: secretNum,
        }
      );
      this.setState({
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
    //};
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
