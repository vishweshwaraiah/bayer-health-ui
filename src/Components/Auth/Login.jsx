import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const goToRegister = () => {
    navigate('/register');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    const url = 'http://localhost:5001/api/auth/login';

    if (!email) {
      alert('Username is required!');
    }

    if (!password) {
      alert('Password is requred!');
    }

    try {
      const response = await fetch(url, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body:JSON.stringify({
        login_name: email,
        password,
        })
      });

      const res = await response.json();

      if (response.status === 200) {
        navigate("/welcome");
        props.clickHandler(res);
      } else {
        setError(true);
        setErrorMessage('Wrong response!');
      }
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='main_page'>
      <h2>Login</h2>
      {error && errorMessage && <div className='error'>{errorMessage}</div>}
      <form onSubmit={handleLogin}>
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
        <button type='submit'>Login</button>

        <Button variant='link' className='mt-3' onClick={goToRegister}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Login;
