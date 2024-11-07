import React, { useState } from 'react';
import './Login.css';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    // const url = '/api/login';

    if (!email) {
      alert('Username is required!');
    }

    if (!password) {
      alert('Password is requred!');
    }

    try {
      const response = {
        status: 200,
        email: email,
      };

      // const response = await fetch(url, {
      //   username: email,
      //   password,
      // });

      // const res = await response.json();

      if (response.status === 200) {
        props.clickHandler(response.email);
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
    <>
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
      </form>
    </>
  );
};

export default Login;
