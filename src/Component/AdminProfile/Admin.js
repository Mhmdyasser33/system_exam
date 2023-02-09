import React , {Component} from "react";
import './Admin.css'
class Admin extends Component{
    render(){
        return(
            <div>
            <header>
                <div className="container">
                <p>  الاسم : {this.props.id} </p>
                <p>  الرقم القومي : {this.props.secretNum} </p>
                <p> الكليه : حاسبات ومعلومات </p>
                <p> الرقم الجامعي : غير معروف </p>
                </div> 
             </header>
            </div>
            
        )
    }
}
export default Admin;