import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const RegisterForm = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', formData)
      console.log('registration response', response.data)

      router.push('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
  return (
    <>
      <div className="register-form">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-6'>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" name='firstName' value={formData.firstName} onChange={handleChange} />
              </div>
            </div>
            <div className='col-md-6'>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" name='lastName' value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name='username' value={formData.username} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name='email' value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name='password' value={formData.password} onChange={handleChange} />
          </div>

          {/* <p className="description">
            The password should be at least eight characters long. To make it
            stronger, use upper and lower case letters, numbers, and symbols
            like ! ? $ % ^ & )
          </p> */}
          <div className='d-grid'>
            <button type="submit" className="btn btn-primary">
              Register Now
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterForm
