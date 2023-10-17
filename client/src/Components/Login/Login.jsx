import React, { useState } from 'react';
import './loginStyle.css'; // Import your CSS file

const Login = () => {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const toggleForm = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <div className="bgimg">
      <div className="wrapper">
        <div className={`form-box ${isLoginVisible ? 'login' : 'register'}`}>
          <h2>{isLoginVisible ? 'Login' : 'Registration'}</h2>
          <form className='form-data'>
            {isLoginVisible ? (
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" id="login-email" required />
                <label>Email</label>
              </div>
            ) : (
              <>
                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="mail"></ion-icon>
                  </span>
                  <input type="email" id="email" required />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="person"></ion-icon>
                  </span>
                  <input type="text" id="username" required />
                  <label>Username</label>
                </div>
              </>
            )}
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-open"></ion-icon>
              </span>
              <input type="password" id="pass" required />
              <label>Password</label>
            </div>
            {!isLoginVisible && (
              <div className="input-box">
                <select id="Inventory-Type" required>
                  <option value="" disabled selected>
                    Inventory Type
                  </option>
                  <option value="type1">Hospital</option>
                  <option value="type2">Super Market</option>
                  <option value="type3">Sample</option>
                </select>
              </div>
            )}
            {isLoginVisible && (
              <div className="remember-forgot">
                <a href="#">Forgot Password?</a>
              </div>
            )}
            <button type="submit" className="btn" id={isLoginVisible ? 'login' : 'register'}>
              {isLoginVisible ? 'Login' : 'Register'}
            </button>
            <div className="login-register">
              <p>
                {isLoginVisible ? "Don't have an account? " : 'Already have an account? '}
                <a
                  href="#"
                  className={isLoginVisible ? 'register-link' : 'login-link'}
                  onClick={toggleForm}
                >
                  {isLoginVisible ? 'Register' : 'Login'}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
