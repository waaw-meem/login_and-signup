import React, { useEffect } from "react";
import { BsBellFill,BsThreeDotsVertical,BsList,BsFillPersonCheckFill,BsLockFill } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import {Link} from "react-router-dom";
import $ from 'jquery';
import axios from "axios";
import './Config';

const dropdown = () =>{
    $(".menu_dropdown").fadeToggle();
}

var collpase_check = 0;
const collapse = () =>{
    
    $(".container_leftbar").fadeToggle();

    if (window.matchMedia('(max-width: 768px)').matches) {
        $(".lightbox").fadeToggle();
    }else{
        if(collpase_check === 0){
            $(".container_header").css('margin-left','0%');
            $(".container_header").css('width','98%');
            $(".container_content").css('margin-left','0%');
            $(".container_content").css('width','98%');
            collpase_check = 1;
        }else{
            $(".container_header").css('margin-left','17%');
            $(".container_header").css('width','81%');
            $(".container_content").css('margin-left','17%');
            $(".container_content").css('width','81%');
            collpase_check = 0;
        }
    }
    
    
    
}

const logout = () =>{
        const token=global.getCookie('token');
        const headers = {
          'Authorization': 'Bearer ' + token
        };
        const article = {  };
        axios.post(global.baseurl + "api/destroy",article,{headers}).then((data) => {
            if(data.data.message){
                alert('Success...');
                console.log(data);
                //document.cookie="token=;"+global.localPath;
                document.cookie="is_super_admin=;"+global.localPath;
                document.cookie="is_agency=;"+global.localPath;
                document.cookie="is_company=;"+global.localPath;
                document.cookie="is_worker=;"+global.localPath;
                document.cookie="roles=;"+global.localPath;
                document.cookie="permissions=;"+global.localPath;
                
                window.location.href = global.localPath + "login";
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
              window.location.href = global.localPath + "login";
        })
}



function Header() {
    //const [tasks, settasks] = useState([]);
    useEffect(() => {
            const token=global.getCookie('token');
            const headers = {
              'Authorization': 'Bearer ' + token
            };
           // const article = {  };
            axios.get(global.baseurl + "api/roles",{headers}).then((data) => {
                if(data.data.message){
                    
                    console.log(data);
                    
                }
                
            }).catch(() => {
                
                  window.location.href = global.localPath + "login";
            })
    }, []);
    
  return (
    <>
    <div className='lightbox' onClick={collapse}></div>
    <header className="container_header animate__animated animate__slideInDown" >
            <div className='header'>
                <Link to="#" onClick={collapse} className="color_black"> <span><BsList /></span></Link>
                <div className='pull_right'><Link to="#" onClick={dropdown} className="color_black"> <span><BsThreeDotsVertical /></span></Link>
                    <ul className='menu_dropdown'>
                        <li><Link to="#" className="color_black dropdown_btn"><span><BsFillPersonCheckFill /></span> Activity Log</Link></li>
                        <li><Link to="#" className="color_black dropdown_btn"><span><FaCogs /></span> Settings</Link></li>
                        <li><Link to="#" onClick={logout} className="color_black dropdown_btn"><span><BsLockFill /></span> Sign Out</Link></li>
                    </ul>
                </div>
                <div className='pull_right'><Link to="#" className="color_black"> <span><BsBellFill /></span></Link><span className="badge">82</span></div>
                
            </div>
            <div className='heading_btn'>
                <h1>Dashboard <label className="lbl_info">Super Admin</label></h1>
                <h5>Welcome back to the Dashboard.</h5>
                <p>Scroll down to see quick links and overviews of your Server, To do list Order status or get some Help.</p>
            </div>
        </header>
        </>
  )
}

export default Header
