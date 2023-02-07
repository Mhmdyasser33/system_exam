    import React , {Component}  from "react";
    import './Login.css'
    class Login extends Component {
        // handleSubmit 
        handleSubmit = (event) =>{
            // get all variables 
            const id = document.getElementById("id_input").value 
            const secretNumber = document.getElementById("secretNum_input").value ; 
            const btn = document.getElementById("btn")  ; 
            btn.addEventListener(('click') , () =>{
                if(id ==='' && secretNumber === ''){
                  event.preventDefault();
                }else{
                    return true ; 
                }
            })
        }
        render(){
            return (
                <form onClick={this.handleSubmit}>
                    <h3 className="login"> التسجيل </h3>
                    <input type="password" className="password" id="id_input" placeholder="الرقم القومي "/> 
                    <input type="password" className="password" id="secretNum_input" placeholder="الرقم السري "/>
                    <br></br>
                    <button  className="btn" id="btn"> تسجيل </button>
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