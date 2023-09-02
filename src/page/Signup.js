import React from 'react';
import Welcome from '../component/Welcome';
import signup from '../images/image_63630 1.png'
import Header from '../component/Header';

function Signup() {
return (
<>
<Header title=""/>
    <Welcome title="WORLD!!" />
    <div className="login-bg">
        <div className="container py-5">
            <p className="text-end"> If you encounter issues, please contact <span style={{color:'#F00'}}>Online
                    CS</span></p>
            <div className="row p-4 border-warning border-4 border">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg">
                    <div className="sign-in">
                        <h4 className="text-center pt-5 border-4 border-bottom border-warning pb-3 w-75 mx-auto">SIGN IN
                        </h4>
                        <div class="mb-3 w-75 mx-auto pt-4">
                            <label class="form-label" htmlFor="email">Username *</label>
                            <input type="text" name="email" class="form-control" placeholder="Enter Username / Email" />
                        </div>
                        <div class="mb-3 w-75 mx-auto">
                            <label class="form-label" htmlFor="pass">Password *</label>
                            <input type="password" name="pass" class="form-control" placeholder="Enter Password" />
                        </div>
                        <div class="mb-3 w-75 mx-auto">
                            <label class="form-label" htmlFor="cpass">Confirm Password *</label>
                            <input type="password" name="cpass" class="form-control" placeholder="Enter Confirm Password" />
                        </div>
                        <div class="mb-3 w-75 mx-auto">
                            <label class="form-label" htmlFor="cpass">Choose Currency *</label>
                            <select className='w-100 select-bg' name="" id="">
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                        <div class="mb-3 w-75 mx-auto">
                            <label class="form-label" htmlFor="pass">Referal Code</label>
                            <input type="password" name="pass" class="form-control" placeholder="Referal Code (Optional)" />
                        </div>
                        <div className="text-center pb-5">
                            <button type='submit' className="btn custom-btn login-btn mt-2 w-25"
                                style={{borderRadius:0}}>REGISTER</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 pt-sm-0 pt-3 pt-lg-0 pt-md-0">
                    <img className="img-fluid" src={signup} alt="" />
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default Signup;