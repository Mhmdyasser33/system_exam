import React , {Component, Fragment} from "react";
import './Admin.css'
import axios from "axios";

// Admin component to display information about an administrator
class Admin extends Component{
  // State to store the data fetched from the API
  state = {
    data : null 
  }

  // Lifecycle method to fetch the data from the API when the component is first loaded
  componentDidMount = () => {
    axios.get("127.0.0.1:3000/v0/admin")
      .then((Response) => this.setState({
        // Store the data in the state
        data : Response.data 
      }))
      .catch((error) => console.error(error)) // Log any errors to the console
  }

  // Render the component
  render(){
    // Destructure the data from the state
    const {data} = this.state 
    return(
      <div>
        <header>
          <div className="container">
            {
              // Display the information from the state if it exists
              data ? (
                <Fragment>
                  <p>  الاسم : {data.arabic_name} </p>
                  <p>  الرقم القومي : {data.national_id} </p>
                  <p> الكليه : {data.college} </p>
                  <p> الرقم الجامعي : {data.admin_id} </p>
                </Fragment>
              ) : (
                // Display a message if the data is not found
                <p> Not found </p>
              )
            }
          </div> 
        </header>
      </div>
    )
  }
}

// Export the Admin component
export default Admin;
