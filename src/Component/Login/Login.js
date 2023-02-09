
import React , {Component}  from "react";
import './Login.css'
class Login extends Component {
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
        // last condition to prevent student if he did not entered id or secret num to login 
        if (selectedUserType && selectedUserType.value === 'student' && input1 !== '' && input2!== '') {
            this.props.handleType('Student', input1, input2);
          }
       else if (selectedUserType && selectedUserType.value === 'admin' && input1 !== '' && input2!== '') {
            this.props.handleType('Admin', input1, input2);
          }
          
  }
  
    render(){
        
        return (
            <form onSubmit={this.handleSubmit} >
                <h3 className="login"> التسجيل </h3>
                <input type="password" className="password" id="id_input" placeholder="الرقم القومي "/> 
                <input type="password" className="password" id="secretNum_input" placeholder="الرقم السري "/>
                <br></br>
                <button className="btn" id="btn" onClick={this.fetchStudentData} > تسجيل </button>
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