import {Link} from "react-router-dom";
import $ from 'jquery';
import logo from './images/logo_white.png';

const signUp_submit = () =>{
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    
    if (name === '' ) {
        alert('Name Field is Empty');
    }
    else if (email === '' ) {
        alert('Email Field is Empty');
    }
    else if (password === '' ) {
        alert('Password Field is Empty');
    }
    else if (confirm_password === '' ) {
        alert('Confirm Password Field is Empty');
    }
    else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please Enter Valid Email Address');
    }
    else if (password.length < 8) {
        alert('Password Length must be 8 Character');
    }
    else if (password !== confirm_password) {
        alert('Password Not Match');
    }else{
        alert('Success');
    }
}

function SignUp() {
  return (
    <div className="container_login mt2 animate__animated animate__slideInLeft" >
        <h1 className="text_center"><img src={logo}  alt="logo" className="logo" width="200" /></h1>
        <h1 className="color_three text_center mt2">Sign-Up</h1>
        <div className="form">
            {/* <label className="checkcontainer">Worker
                <input type="radio" checked="checked" name="radio"/>
                <span className="radiobtn"></span>
            </label>
            <label className="checkcontainer">Company
                <input type="radio"  name="radio"/>
                <span className="radiobtn"></span>
            </label> */}
            <div className="form_group">
                <input type="text" id="name" className="form_control" name="text" placeholder="Name"/>
            </div>
            <div className="form_group">
                <input type="email" id="email" className="form_control" name="text" placeholder="Email"/>
            </div>
            <div className="form_group">
                <input type="password" id="password" className="form_control" name="text" placeholder="Password" />
            </div>
            <div className="form_group">
                <input type="password" id="confirm_password" className="form_control" name="text" placeholder="Confirm Password"/>
            </div>
            
            <p>Already have an account? 
             
                <Link to="/login" className="color_two"> Login</Link>
                
                
            </p>
            <div className="text_center">
                {/* <h3>OR</h3>
                <button type="submit" className="btn_light logo_google">SIGN-UP WITH GOOGLE</button>
                <button type="submit" className="btn_light logo_link">SIGN-UP WITH LINKEDIN</button> */}
                <button type="submit" onClick={signUp_submit} id="submit"  className="btn_primary">SIGN-UP</button>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp
