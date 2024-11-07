import { useState } from 'react';
import './App.css';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userName, setUserName] = useState('');

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const getAuthDetails = async (email) => {
    if (email) {
      setIsLoggedIn(true);
      setUserName(email);
    }
  };

  return (
    <div className='main-page'>
      {isLoggedIn ? (
        <div className='main-page'>
          This is Home/Main Page and User is {userName}
        </div>
      ) : (
        <>
          {isLogin ? <Login clickHandler={getAuthDetails} /> : <Registration />}
          <button className='mt-3' onClick={toggleLogin}>
            Login/Register
          </button>
        </>
      )}
    </div>
  );
}

export default App;
