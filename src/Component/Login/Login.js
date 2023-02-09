
import React , {Component}  from "react";
import './Login.css'
class Login extends Component {
    state = {
        isStudent : false 
    }
    handleSubmit = (e) =>{
        e.preventDefault();

        const input1 = document.getElementById("id_input").value ; 
        const input2 = document.getElementById("secretNum_input").value ; 
        if ( !input1 && !input2 ){
            alert("id and secretNum fields are required!") ;
        }
        else if (!input1) {
            alert("id field is required!") ;
            return ; 
        } else if (!input2) {
            alert("secretNumber field is required!") ;
            return ; 
        }
        const selectedUserType = document.querySelector('input[name="user_type"]:checked'); 
        if (selectedUserType && selectedUserType.value === 'student') {
            this.fetchStudentData();
          }
  }
  fetchStudentData = () =>{
   fetch("http://localhost:3000/127.0.0.1:3000/v0/student")
   .then((response) => {
    console.log(response);  
   }
   ).catch((error) =>{
    console.log(error) ; 
   })
  }
    render(){
       
        return (
            <form onSubmit={this.handleSubmit} >
                <h3 className="login"> التسجيل </h3>
                <input type="password" className="password" id="id_input" placeholder="الرقم القومي "/> 
                <input type="password" className="password" id="secretNum_input" placeholder="الرقم السري "/>
                <br></br>
                <button className="btn" id="btn" onClick={this.fetchStudentData}> تسجيل </button>
                <div className="radio_btn_Container">
                <input type="radio" name="user_type" id="student" value="student"/>
                <label for="student"> طالب</label>
                <input type="radio" name="user_type" id="admin" value="admin"/>
                <label for="admin">  أدمن </label>
                </div>
            </form>
            );
    }
        
    }

export default Login ;