import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Login = () => {

  return (

    <div className="container-fluid">
      <div className="row">
        <div className="mainpic col-12 d-none d-md-block col-md-6 col-lg-7">
          <img className="logo ms-4" src={Logo} alt="Logo" />
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-5 d-flex align-items-center">
          <div className="signin d-flex flex-column w-100">
            <h2>Sign in</h2>
            <p>If you don't have an account register</p>
            <p>
              You can <Link className="link-text" to="/register">Register here!</Link>
            </p>

            <form className="mt-4 d-flex flex-column w-75 ">
              <div className="form-group">
                <label className='forform' htmlFor="username">Email</label> <br />
                <label className='mt-1' ><i className="fa-regular fa-envelope"></i> Enter your email address</label>
                <input
                  type="text"
                  id="username"
                  required
                  className="form-control input1 "
                />
              </div>

              <div className="form-group">
                <label className='forform' htmlFor="password">Password</label> <br />
                <label className='mt-1'><i className="fa-solid fa-lock me-1"></i>Enter your password</label>

                <input
                  type="password"
                  id="password"
                  required
                  className="form-control input2"
                />
                <div className="mt-3 form-check">
                  <input type="checkbox" className="form-check-input mt-1 me-1"  />
                  <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  <label className="forgot" >Forgot password?</label>

                </div>

              </div>

              <button type="submit" className="btn login-btn mt-2">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
