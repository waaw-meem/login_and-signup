
import Sidebar from './Sidebar';
import Header from './Header';

import { FaLongArrowAltRight,FaRegCalendarAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import {Link} from "react-router-dom";


function Dashboard() {
  return (
    <>
        <Sidebar></Sidebar>
        <Header></Header>
        <div className="container_content">
            <section className='col_6 card animate__animated animate__fadeIn'>
                <div className='header'>
                    <div className='title'>Activities</div>
                    <div className='info pull_right'>20 finished, 5 remaining</div>
                </div>
                <div className='col_full'>
                    <table className='table' width="100%">
                        
                        <tbody>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                            <tr>
                                <td><span className='dot'></span></td>
                                <td><span className='color_four'>Indus Staffing Solutions</span> Assign you a task</td>
                                <td align='right'>Just Now</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <Link to="#" className="view_all">View all <span><FaLongArrowAltRight /></span></Link>
                </div>
                
            </section>
            <section className='col_6 card animate__animated animate__fadeIn'>
                <div className='header'>
                        <div className='title'>Recent Agencies</div>
                        
                </div>
                <div className='col_full'>
                    <table className='table' width="100%">
                        
                        <tbody>
                            <tr>
                                <td>Cubix Lab<p><span><FaRegCalendarAlt /></span> March 14, 2022 </p></td>
                            </tr>
                            <tr>
                                <td>Cubix Lab<p><span><FaRegCalendarAlt /></span> March 14, 2022 </p></td>
                            </tr>
                            <tr>
                                <td>Cubix Lab<p><span><FaRegCalendarAlt /></span> March 14, 2022 </p></td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <Link to="#" className="view_all">View all <span><FaLongArrowAltRight /></span></Link>
                </div>
            </section>
            <section className='col_6 card animate__animated animate__fadeIn'>
                <div className='header'>
                        <input type="text" className='form_control_group'/>
                        <button className='btn_secondary btn_group'>ADD</button>
                        
                </div>
                <div className='col_full'>
                    <table className='table' width="100%" cellSpacing={0}>
                        
                        <tbody>
                            <tr>
                                <td className='bb_black'>Print Statement</td>
                                <td className='bb_black'><Link to="#" className="table_icon_right"><span><AiFillCloseCircle /></span></Link></td>
                            </tr>
                            <tr>
                                <td className='bb_black'>Create Invoice</td>
                                <td className='bb_black'><Link to="#" className="table_icon_right"><span><AiFillCloseCircle /></span></Link></td>
                            </tr>
                            <tr>
                                <td className='bb_black'>Merry Chrismas</td>
                                <td className='bb_black'><Link to="#" className="table_icon_right"><span><AiFillCloseCircle /></span></Link></td>
                            </tr>
                        </tbody>
                        
                    </table>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default Dashboard
