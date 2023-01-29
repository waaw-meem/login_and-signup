import logo from './images/logo_white.png';
function Forgot_password() {
  return (
    <div className="container_login mt4 animate__animated animate__bounceIn" >
        <h1 className="text_center"><img src={logo}  alt="logo" className="logo" width="200" /></h1>
        <h1 className="color_three text_center mt1">Forgot Password</h1>
        <div className="form">
            <div className="form_group">
                <input type="email" className="form_control" name="text" placeholder="Email"/>
            </div>
            <div className="text_center mt2">
                <button type="submit"  className="btn_primary">SEND ME EMAIL</button>
            </div>
            
        </div>
    </div>
  )
}

export default Forgot_password
