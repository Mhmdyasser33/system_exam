import React , {Component}  from "react";
import './Login.css'

// Login component to render login form and handle login functionality 
class Login extends Component {
    // handleSubmit function to handle the submit event of the form 
    handleSubmit = (e) =>{
        e.preventDefault();
        // get the values of the inputs 
        const input1 = document.getElementById("id_input").value ; 
        const input2 = document.getElementById("secretNum_input").value ; 
        // check if both inputs are filled 
        if ( !input1 && !input2 ){
            alert("ID and SecretNum fields are required!") ;
        }
        // check if the first input is filled 
        else if (!input1) {
            alert("id field is required!") ;
            return ; 
        } 
        // check if the second input is filled 
        else if (!input2) {
            alert("secretNumber field is required!") ;
            return ; 
        }
        // get the selected user type 
        const selectedUserType = document.querySelector('input[name="user_type"]:checked'); 
        // check the selected user type and call the handleType function from the parent component if the inputs are filled 
        if(selectedUserType && selectedUserType.value ==='student' && input1!=='' && input2!==''){
            this.props.handleType('Student' , input1 , input2 ) ;
        }else if(selectedUserType && selectedUserType.value ==='admin' && input1!=='' && input2!==''){
            this.props.handleType('Admin' , input1 , input2 ) ;
        }    
    }

    render(){
        return (
            // render the login form 
            <form onSubmit={this.handleSubmit} >
                <h3 className="login"> التسجيل </h3>
                <input type="password" className="password" id="id_input" placeholder="الرقم القومي "/> 
                <input type="password" className="password" id="secretNum_input" placeholder="الرقم السري "/>
                <br></br>
                <button className="btn" id="btn" > تسجيل </button>
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