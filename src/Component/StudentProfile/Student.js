import React , {Component} from "react";
import './Student.css'
class Student extends Component{
    render(){
        return(
            <div>
            <header>
                <div className="container">
                <p>  الاسم : غير معروف </p>
                <p>  الرقم القومي : غير معروف  </p>
                <p> الكليه : غير معروف </p>
                <p> نوع الاداره : غير معروف </p>
                </div> 
             </header>
            </div>
            
        )
    }
}
export default Student;