import { createGlobalState } from "react-hooks-global-state";
global.baseurl = "http://emp.cognitiveitsolutions.ca/public/";
global.localPath = "http://localhost:3000/";
// //global.token = "111";
// var tokenm='1';
// global.tokenm=tokenm;
// global.get_cookie_data =()=>{
//     tokenm=global.getCookie('token');
//     global.tokenm=tokenm;

//     alert(tokenm);

    
//   }

        // global.tokenm=global.getCookie('token');
        // global.headers = {
          
        //   'Authorization': 'Bearer ' + global.tokenm,
        //   'XSRF-TOKEN': 'Bearer ' + global.tokenm,
        //   'X-XSRF-TOKEN': 'Bearer ' + global.tokenm,
        //   "Access-Control-Allow-Origin": "*",
        //   'X-CSRF-TOKEN': 'Bearer ' + global.tokenm
        // };

  global.getCookie =(cname)=>{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i=0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)===' '){
            c=c.substring(1);
        }
        if(c.indexOf(name)===0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


const { setGlobalState, useGlobalState} = createGlobalState({
    token2:'0'
});
let chk = 0;
// function Config() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export {chk,useGlobalState, setGlobalState};
