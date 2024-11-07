import React, { useState } from 'react';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Registration = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const goToLogin = () => {
    navigate('/login');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering', { email, password, name, mobile });
  };

  return (
    <div className='main_page'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Mobile:</label>
          <input
            type='tel'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Register</button>

        <Button variant='link' className='mt-3' onClick={goToLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Registration;
