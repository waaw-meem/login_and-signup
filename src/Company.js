import logo from './images/logo.png';

function Company() {
  return (
    <div className="container_form">
      <header><center><img src={logo}  alt="logo" className="logo" width="200" /></center></header>
      <section>
        <h1 className='mb2'><center>Company Form</center></h1>
        <h1>Fill this form Carefully</h1>
        <h3>Basic Information</h3>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Company</label>
                    <input type="text" className="form_control2" name="text" placeholder="Company Name"/>
            </div>
            <div className="form_group col_4">
                    <label>Website</label>
                    <input type="text" className="form_control2" name="text" placeholder="Website"/>
            </div>
            <div className="form_group col_4">
                    <label>Contact No</label>
                    <input type="text" className="form_control2" name="text" placeholder="Contact No"/>
            </div>
        </div>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Mobile No</label>
                    <input type="text" className="form_control2" name="text" placeholder="Mobile No"/>
            </div>
            <div className="form_group col_4">
                    <label>Fax No</label>
                    <input type="text" className="form_control2" name="text" placeholder="Fax No"/>
            </div>
        </div>
        <div className='col_12'>
            <div className="form_group col_4">
                    <label>Select Contractor</label>
                    <select className='form_control2 form_select2'>
                        <option>Select Contractor</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form_group col_4">
                    <label>Markup Rate</label>
                    <input type="text" className="form_control2" name="text" placeholder="Markup Rate"/>
            </div>
            <h3 className='mt3'>Address Information</h3>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Street No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Street No"/>
                </div>
                <div className="form_group col_4">
                        <label>Street Name</label>
                        <input type="text" className="form_control2" name="text" placeholder="Street Name"/>
                </div>
                <div className="form_group col_4">
                        <label>Unit No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Unit No"/>
                </div>
            </div>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Province</label>
                        <input type="text" className="form_control2" name="text" placeholder="Province"/>
                </div>
                <div className="form_group col_4">
                        <label>City</label>
                        <input type="text" className="form_control2" name="text" placeholder="City"/>
                </div>
                <div className="form_group col_4">
                        <label>Postal Code</label>
                        <input type="text" className="form_control2" name="text" placeholder="Postal Code"/>
                </div>
            </div>
            <h3 className='mt3'>Other Details</h3>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Contact Person Name</label>
                        <input type="text" className="form_control2" name="text" placeholder="Contact Person Name"/>
                </div>
                <div className="form_group col_4">
                        <label>Contact No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Contact No"/>
                </div>
                <div className="form_group col_4">
                        <label>Extension</label>
                        <input type="text" className="form_control2" name="text" placeholder="Extension"/>
                </div>
            </div>
            <div className='col_12'>
                <div className="form_group col_4">
                        <label>Designation</label>
                        <input type="text" className="form_control2" name="text" placeholder="Designation"/>
                </div>
                <div className="form_group col_4">
                        <label>Cell No</label>
                        <input type="text" className="form_control2" name="text" placeholder="Cell No"/>
                </div>
                <div className="form_group col_4">
                        <label>Email</label>
                        <input type="email" className="form_control2" name="text" placeholder="Email"/>
                </div>
                <div className="form_group col_12">
                        <label className="checkcontainer">This is my primary contact
                        <input type="checkbox" />
                        <span className="checkmark2"></span>
                        </label>
                </div>
            </div>
            <div className='col_12'>
                <button className='btn btn_submit_form mt1'>Cancel</button>
                <button className='btn btn_submit_form2 mt1 pull_right mr3'>Save</button>
                <button className='btn btn_submit_form mt1 pull_right'>Go Back</button>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default Company
