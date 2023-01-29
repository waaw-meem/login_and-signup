//import capt from './images/google-recaptcha.png';
import logo from './images/logo_white.png';
import {Link} from "react-router-dom";
import $ from 'jquery';
import axios from "axios";
import './Config';

const cookie_data =()=>{
    var email = $("#email").val();
    var password = $("#password").val();

    document.cookie="my_email="+email+";"+global.localPath;
    document.cookie="my_password="+password+";"+global.localPath;
}

const clear_cookie_data =()=>{
    
    document.cookie="my_email=;"+global.localPath;
    document.cookie="my_password=;"+global.localPath;
}

const get_cookie_data =()=>{
    var email=global.getCookie('my_email');
    var password=global.getCookie('my_password');
    
    $("#email").val(email);
    $("#password").val(password);
    if(email !== ''){
        $('.rememberMe').prop('checked',true);
    }
}



const login_submit = () =>{
    var email = $("#email").val();
    var password = $("#password").val();
    
    
    if (email === '' ) {
        alert('Email Field is Empty');
    }
    else if (password === '' ) {
        alert('Password Field is Empty');
    }
    else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please Enter Valid Email Address');
    }else{
        const token=global.getCookie('token');
        const headers = {
          'Authorization': 'Bearer ' + token
        };
        const article = { email: email, password: password };
        axios.post(global.baseurl + "api/login",article,{headers}).then((data) => {
            console.log(data.data);
            if(data.data.message){
                alert('Email or Password Not Match...');
                document.cookie="token=;"+global.localPath;
            }else{
                alert('Success...');
                document.cookie="token="+data.data.data.token+";"+global.localPath;
                document.cookie="is_super_admin="+data.data.data.is_super_admin+";"+global.localPath;
                document.cookie="is_agency="+data.data.data.is_agency+";"+global.localPath;
                document.cookie="is_company="+data.data.data.is_company+";"+global.localPath;
                document.cookie="is_worker="+data.data.data.is_worker+";"+global.localPath;
                
                const role = data.data.data.roles;
                const roles = [
                        role.id,
                        role.name
                    ];
                document.cookie="roles="+roles+";"+global.localPath;
                document.cookie="permissions="+data.data.data.permissions+";"+global.localPath;
                
                if($('.rememberMe').prop('checked')) {
                    cookie_data();
                }else{
                    clear_cookie_data();
                }
                window.location.href = global.localPath + "dashboard";
            }
              
        }).catch((err) => {
            if (err.response) {
                alert('Email or Password Not Match...');
                document.cookie="token=;"+global.localPath;
              } else if (err.request) {
                alert('Email or Password Not Match...');
                document.cookie="token=;"+global.localPath;
              } else {
                alert('Email or Password Not Match...');
                document.cookie="token=;"+global.localPath;
              }
        })

        
    }
}
function Login() {
  return (
    <div className="container_login mt4 animate__animated animate__slideInLeft" onLoad={get_cookie_data}>
        <h1 className="text_center"><img src={logo}  alt="logo" className="logo" width="200" /></h1>
        <h1 className="color_three text_center mt1">Log-In</h1>
        <div className="form">
            
            <div className="form_group">
                <input type="email" id="email" className="form_control" name="text" placeholder="Email"/>
            </div>
            <div className="form_group">
                <input type="password" id="password" className="form_control" name="text" placeholder="Password"/>
            </div>
            <label className="checkcontainer">Remember me
                <input type="checkbox" className='rememberMe' />
                <span className="checkmark"></span>
            </label>
            <label className="checkcontainer pull_right">
                <Link to="/forgot_password" className="text_right color_two"> Forgot Password</Link>
            </label>
            
            <p className="text_right mt0">Register yourself by clicking <Link to="/" className="color_two"> Here</Link></p>
            
            {/* <img src={capt} width="170" alt="captcha" /> */}
            
            <div className="text_center">
                {/* <h3>OR</h3>
                <button type="submit" className="btn_light logo_google">SIGN-IN WITH GOOGLE</button>
                <button type="submit" className="btn_light logo_link">SIGN-IN WITH LINKEDIN</button> */}
                <button type="submit" id="submit" onClick={login_submit} className="btn_primary">LOGIN</button>
            </div>
            
        </div>
    </div>
  )
}

export default Login
