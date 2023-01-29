import logo from './images/logo_white.png';
import avatar from './images/avatar.png';
import { BsColumnsGap } from "react-icons/bs";
import { FaUsers,FaFileAlt,FaFileInvoiceDollar } from "react-icons/fa";

function Sidebar() {
  return (
    
    <div className="container_leftbar animate__animated animate__slideInLeft">
            <img src={logo}  alt="logo" className="logo" />
            <img src={avatar}  alt="logo" className="avatar" />
            <h5>John Doe</h5>
            <p>Super Admin</p>
            <hr></hr>
            <div className='btns_content'>
                <button className='btns'><BsColumnsGap /> <span>Dashboard</span> </button>
                <button className='btns'><FaUsers /> <span>Admin Users</span> </button>
                <button className='btns'><FaFileAlt /> <span>Forms</span> </button>
                <button className='btns'><FaFileInvoiceDollar /> <span>Payrolls</span> </button>
            </div>
            
    </div>
  )
}

export default Sidebar
