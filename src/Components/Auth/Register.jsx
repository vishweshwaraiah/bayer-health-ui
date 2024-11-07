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
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [user_type, setUser_Type] = useState('');
  const [specialty, setSpeciality] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [infoMessage, setInfoMessage] = useState('');

  const goToLogin = () => {
    navigate('/login');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Add your login logic here
    const url = 'http://localhost:5002/api/user/create';

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
          'Content-Type': 'application/json',
          'x-static-key':'mySecretStaticKey123'
      },
        body:JSON.stringify({
          "password":password,
          "name": name,
          "age": age,
          "gender": gender,
          "user_type": user_type,
          "email": email,
          "phoneNumber": mobile,
          "specialty": specialty
        }
        )
      });

      const res = await response.json();

      if (response.status === 200) {
        props.clickHandler(res);
        setInfoMessage("User is registered successfully!");
        navigate('/login');
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
      <h2>Register</h2>
      <p>{infoMessage}</p>
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
        <div className='form-group'>
          <label>specialty</label>
          <input
            type='tel'
            value={specialty}
            onChange={(e) => setSpeciality(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Age</label>
          <input
            type='tel'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Gender</label>
          <input
            type='tel'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>UserType</label>
          <input
            type='tel'
            value={user_type}
            onChange={(e) => setUser_Type(e.target.value)}
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
