import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png';

const Register = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="mainpicregister col-12 d-none d-md-block col-md-6 col-lg-7">
        <img className="logo ms-4" src={Logo} alt="Logo" />
      </div>

      <div className="col-12 col-sm-12 col-md-6 col-lg-5 d-flex align-items-center">
        <div className="signup d-flex flex-column w-100 mb-5 mt-5">
          <h2>Sign in</h2>
          <p>If you already have an account register</p>
          <p>
            You can <Link className="link-text" to="/">Login here!</Link>
          </p>
          <form className="mt-4 d-flex flex-column w-75">
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
              <label className='forform' htmlFor="username">Username</label> <br />
              <label className='mt-1' ><i class="fa-regular fa-user"></i> Enter your username</label>
              <input
                type="text"
                id="name"
                required
                className="form-control input2 "
              />
            </div>
            <div className="form-group">
              <label className='forform' htmlFor="username">Username</label> <br />
              <label className='mt-1' ><i class="fa-regular fa-user"></i> Enter your username</label>
              <input
                type="text"
                id="name"
                required
                className="form-control input2 "
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
            </div>
            <div className="form-group">
              <label className='forform' htmlFor="password">Confirm Password</label> <br />
              <label className='mt-1'><i className="fa-solid fa-lock me-1"></i>Confirm your password</label>

              <input
                type="password"
                id="password"
                required
                className="form-control input2"
              />
            </div>
            <button type="submit" className="btn register-btn mt-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register