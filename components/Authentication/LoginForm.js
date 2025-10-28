import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';
import Button from '@mui/material';

const LoginForm = () => {

  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', credentials)
      console.log('Response:', response.data); // Log the response data
      const { token } = response.data
      localStorage.setItem('token', token)
      alert('login successfully')
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('login failed')
    }
  }
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" value={credentials.username} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
          </div>

          {/* <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkme"
                />
                <label className="form-check-label" htmlFor="checkme">
                  Remember me
                </label>
              </div>
            </div> */}

          {/* <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
              <a href="#" className="lost-your-password">
                Forgot your password?
              </a>
            </div> */}
          {/* </div> */}

          <div className='d-grid'>
            {/* <button
              className='btn btn-primary'
              variant="contained"
              type="submit"
            //  className="default-btn"
            >
              Login
            </button> */}
            <button className="btn btn-primary"  type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
