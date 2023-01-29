import React, { useEffect, useState } from "react";
import axios from "axios";
import './Config';
import $ from 'jquery';
import { chk,useGlobalState } from './Config';

//var tokenm='';
const get_cookie_data =()=>{
  // tokenm=global.getCookie('token');
  // $("#tokenm").val(tokenm);
  $("#tokenm").val(1);
  //abc();
  
}

function Users() {
    const [tasks, settasks] = useState([]);
    const token2 = useGlobalState('token2');
    
    const is_agency=global.getCookie('roles');
    
    //const token = window.token;
    // console.log( data );
    const [count2, setCount] = useState(0);
    useEffect(() => {
      setCount(JSON.parse(window.localStorage.getItem('count2')));
    }, []);
  
    useEffect(() => {
      window.localStorage.setItem('count2', count2);
    }, [count2]);
  
    
      // function abc(){
      //   alert(22);
      // }
      useEffect(() => {
        const token=global.getCookie('token');
        const headers = {
          'Authorization': 'Bearer ' + token
        };
        
       //axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
       axios.get(global.baseurl + "api/announcements",{headers}).then((data) => {


        //console.log(data.data);
         settasks(data.data?.data);
      // });
      
            if(data.data.message){
              alert('Success...');
              //document.cookie="token=;"+global.localPath;
              // document.cookie="is_super_admin=;"+global.localPath;
              // document.cookie="is_agency=;"+global.localPath;
              // document.cookie="is_company=;"+global.localPath;
              // document.cookie="is_worker=;"+global.localPath;
              // document.cookie="roles=;"+global.localPath;
              // document.cookie="permissions=;"+global.localPath;
              
              // window.location.href = global.localPath + "login";
          }
            
      }).catch((err) => {
          if (err.response) {
              alert('Email or Password Not Match...');
              //document.cookie="token=;"+global.localPath;
            } else if (err.request) {
              alert('Email or Password Not Match...');
              //document.cookie="token=;"+global.localPath;
            } else {
              alert('Email or Password Not Match...');
              //document.cookie="token=;"+global.localPath;
            }
      })
      
      
    }, []);

    
    // const signUp_submit = () =>{
      
    //   var name = $("#title").val();
    //   const headers = global.headers;
    //   const article = { detail: name };
     
       
    //   axios.post(global.baseurl + "api/announcements",article,{headers}).then((data) => {
    //     console.log(data.data);
    //     settasks(data.data?.data);
    //   });
       
     

    //   }
    


  return (
    <div onLoad={get_cookie_data}>
      <center><h1>USERS</h1></center>
      <input id="tokenm"></input>
      {is_agency}
      {token2}
      {chk}
      <h1> Count {count2} </h1>
      {/* {
            tasks.data.map((task,index) => (
              
              <p key={index}>{task.detail}</p>
               
            ))
          } */}
      <center><input type="text" id="title"></input></center>
      <button onClick={get_cookie_data}>SEND</button>
      <table width="50%" border="1" align="center" cellPadding="5">
        <thead>
        <tr>
                    <th>id</th>
                    <th>detail</th>
        </tr>
        </thead>
        <tbody>
          
         
           
      {tasks.map((item, i) => {
        return (
            
                <tr key={i}>
                    <td align="center">{item?.id}</td>
                    <td align="center">{item?.detail}</td>
                </tr>
         
        );
      })}

    
      </tbody>
      </table>
    </div>
  )
}

export default Users
